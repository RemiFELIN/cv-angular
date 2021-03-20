import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Education } from '../models/education.model';
import {map, tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8010/api/educations";

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    };
  }

  getEducations():Observable<Education[]> {
    return this.http.get<Education[]>(this.url)
    .pipe(
      catchError(this.handleError<Education[]>("getEducations()"))
    );
  }

  updateEducations(education:Education):Observable<any> {
    console.log("Modifié...");
    
    return this.http.put(this.url, education);
  }
}
