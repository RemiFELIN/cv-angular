import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Education } from '../models/education.model';
import {map, tap, catchError} from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  token:string;
  headerDict;
  requestOptions;

  constructor(private http:HttpClient, private localStorageService: LocalStorageService) {
    
    this.token = this.localStorageService.get("token");
    this.headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-access-token': this.token,
    };
    this.requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(this.headerDict), 
    };
  }

  url = "https://cv-miage-backend.herokuapp.com/api/";

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    };
  }

  addEducations(education:Education):Observable<any> {
    return this.http.post<Education>(this.url + "fr/remi.felin/educations/", JSON.stringify(education), this.requestOptions);
  }

  getEducations(lang:string, username:string):Observable<Education[]> {
    return this.http.get<Education[]>(this.url + lang + "/" + username + "/educations")
    .pipe(
      catchError(this.handleError<Education[]>("getEducations(username)" + username))
    );
  }

  updateEducations(education:Education):Observable<any> {
    return this.http.put(this.url + "fr/remi.felin/education/" + education._id, JSON.stringify(education), this.requestOptions);
  }

  deleteEducations(education:Education):Observable<any> {
    return this.http.delete(this.url + "fr/remi.felin/education/" + education._id, this.requestOptions);
  }
}
