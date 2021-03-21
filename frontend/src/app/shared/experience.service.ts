import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience.model';
import {map, tap, catchError} from 'rxjs/operators';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {

  constructor(private http:HttpClient) { }

  url = "https://cv-miage-backend.herokuapp.com/api/";

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    };
  }

  getExperiences(lang:string, username:string):Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url + lang + "/" + username + "/experiences")
    .pipe(
      catchError(this.handleError<Experience[]>("getExperiences(uuid)" + username))
    );
  }
}
