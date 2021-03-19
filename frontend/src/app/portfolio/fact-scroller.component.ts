import { Component } from '@angular/core';
import { Fact } from '../models/fact.model';
import { FactService } from '../shared/fact.service';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-fact-scroller',
    templateUrl: './fact-scroller.component.html',
    styleUrls: ['./portfolio.component.scss']
  })
  export class FactScrollerComponent {
  
    dataSource: FactsDataSource;
  
    constructor(private factService: FactService) {
      this.dataSource = new FactsDataSource(factService);
      console.log(this.dataSource)
    }
  
  }
  
  export class FactsDataSource extends DataSource<Fact | undefined> {
    private cachedFacts = Array.from<Fact>({ length: 0 });
    private dataStream = new BehaviorSubject<(Fact | undefined)[]>(this.cachedFacts);
    private subscription = new Subscription();
  
    private pageSize = 10;
    private lastPage = 0;
  
    constructor(private factService: FactService) {
      super();
  
      // Start with some data.
      this._fetchFactPage();
    }
  
    connect(collectionViewer: CollectionViewer): Observable<(Fact | undefined)[] | ReadonlyArray<Fact | undefined>> {
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
      for (let i = 0; i < this.pageSize; ++i) {
        this.factService.getRandomFact().subscribe(res => {
          this.cachedFacts = this.cachedFacts.concat(res);
          this.dataStream.next(this.cachedFacts);
        });
      }
    }
  
    private _getPageForIndex(i: number): number {
      return Math.floor(i / this.pageSize);
    }
  
  }