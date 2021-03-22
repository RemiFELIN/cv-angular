import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Portfolio } from '../models/portfolio.model';
import { PortfolioService } from '../shared/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio-scroller.component.html',
  styleUrls: ['./portfolio.component.scss']
})
// Inspired from https://www.digitalocean.com/community/tutorials/angular-infinite-scroll
export class PortfolioScrollerComponent {
  
  dataSource: PortfolioDataSource;

  constructor(private route:ActivatedRoute,private portfolioService: PortfolioService) {
    this.dataSource = new PortfolioDataSource(route, portfolioService);
    console.log(this.dataSource)
  }

}
export class PortfolioDataSource extends DataSource<Portfolio | undefined> {

  private cachedFacts = Array.from<Portfolio>({ length: 0 });
  private dataStream = new BehaviorSubject<(Portfolio | undefined)[]>(this.cachedFacts);
  private subscription = new Subscription();

  private pageSize = 10;
  private lastPage = 0;

  constructor(private route:ActivatedRoute, private portfolioService: PortfolioService) {
    super();

    // Start with some data.
    this._fetchFactPage();
  }

  connect(collectionViewer: CollectionViewer): Observable<(Portfolio | undefined)[] | ReadonlyArray<Portfolio | undefined>> {
    this.subscription.add(collectionViewer.viewChange.subscribe(range => {

      const currentPage = this._getPageForIndex(range.end);

      if (currentPage && range) {
        console.log(currentPage, this.lastPage);
      }

      if (currentPage > this.lastPage) {
        this.lastPage = currentPage;
        this._fetchFactPage();
      }
    }));
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }

  private _fetchFactPage(): void {
    let {lang, username} = this.route.snapshot.params;
    for (let i = 0; i < this.pageSize; ++i) {
      this.portfolioService.getPortfolio(lang, username).subscribe(res => {
        this.cachedFacts = this.cachedFacts.concat(res); 
        this.dataStream.next(this.cachedFacts);
      });
    }
  }

  private _getPageForIndex(i: number): number {
    return Math.floor(i / this.pageSize);
  }
}
