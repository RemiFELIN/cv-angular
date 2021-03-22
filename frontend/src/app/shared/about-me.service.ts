import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AboutMe } from '../models/about-me.model';
import { environment } from '../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(private http:HttpClient) { }

  url = "https://cv-miage-backend.herokuapp.com/api/";

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    };
  }

  getAboutMe(lang:string, username:string):Observable<AboutMe> {
    return this.http.get<AboutMe>(this.url + lang + "/" + username + "/aboutme")
    .pipe(
      catchError(this.handleError<AboutMe>("getAboutMe" + username))
    );
  }
}
