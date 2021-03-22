import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience.model';
import {map, tap, catchError} from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {
  token:string;
  username:string;
  headerDict;
  requestOptions;

  constructor(private http:HttpClient, private localStorageService: LocalStorageService) { 
    this.token = this.localStorageService.get("token");
    this.username = this.localStorageService.get("username");
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

  getExperiences(lang:string, username:string):Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url + lang + "/" + username + "/experiences")
    .pipe(
      catchError(this.handleError<Experience[]>("getExperiences(uuid)" + username))
    );
  }

  addExperiences(experience:Experience):Observable<any> {
    return this.http.post<Experience>(this.url + "fr/"+this.username+"/experiences/", JSON.stringify(experience), this.requestOptions);
  }

  updateExperiences(experience:Experience):Observable<any> {
    // TODO: Change this
    // fr/remi.felin is useless 
    return this.http.put(this.url + "fr/"+this.username+"/experience/" + experience._id, JSON.stringify(experience), this.requestOptions);
  }

  deleteExperiences(experience:Experience):Observable<any> {
    return this.http.delete(this.url + "fr/"+this.username+"/experience/" + experience._id, this.requestOptions);
  }
}
