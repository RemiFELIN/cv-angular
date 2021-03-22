import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Information } from '../models/information.model';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  url = "https://cv-miage-backend.herokuapp.com/api/";

  constructor(private http:HttpClient) { }

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    };
  }

  getInformations(lang:string, username:string):Observable<Information> {
    return this.http.get<Information>(this.url + lang + "/" + username + "/detail")
    .pipe(
      catchError(this.handleError<Information>("getInformations"))
    );
  }
}
