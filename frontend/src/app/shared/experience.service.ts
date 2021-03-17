import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience.model';
import {map, tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8010/api/experiences";

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    };
  }

  getExperiences():Observable<Experience[]> {
    //return of(this.experiences);
    return this.http.get<Experience[]>(this.url)
    .pipe(
      catchError(this.handleError<Experience[]>("getExperiences()"))
    );
  }
}
