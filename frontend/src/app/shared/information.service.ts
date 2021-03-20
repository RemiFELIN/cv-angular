import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Information } from '../models/information.model';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  url = "http://localhost:8010/api/informations";

  constructor(private http:HttpClient) { }

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    };
  }

  getInformationByUuid(uuid):Observable<Information> {
    console.log(this.url + "/" + uuid)
    return this.http.get<Information>(this.url + "/" + uuid)
    .pipe(
      catchError(this.handleError<Information>("getInformationByUuid()"))
    );
  }
}
