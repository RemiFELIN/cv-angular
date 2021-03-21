import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Portfolio } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8010/api/";

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    };
  }

  /*getPortfolio(): Observable<Portfolio[]> {
    const month = Math.floor(Math.random() * 11) + 1;
    let maxDay = 30;
    if (month === 2) {
      maxDay = 27;
    } else if ([4, 6, 9, 11].includes(month)) {
      maxDay = 29;
    }
    const day = Math.floor(Math.random() * maxDay) + 1;
    return this.http.get<Portfolio[]>(`http://numbersapi.com/${month}/${day}/date?json`);
  }*/
  getPortfolio(username:string):Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.url + username + "/portfolio")
    .pipe(
      catchError(this.handleError<Portfolio[]>("getPortfolio(uuid)" + username))
    );
  }
}
