import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Information } from '../models/information.model';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  url = "http://localhost:8010/api/";

  constructor(private http:HttpClient) { }

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    };
  }

  getInformations(username):Observable<Information> {
    console.log(this.url + username + "/information");
    return this.http.get<Information>(this.url + username + "/information")
    .pipe(
      catchError(this.handleError<Information>("getInformationByUuid()"))
    );
  }
}
