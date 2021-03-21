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

  url = "http://localhost:8010/api/";

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    };
  }

  getEducations(username:string):Observable<Education[]> {
    console.log(this.url + username + "/education")
    return this.http.get<Education[]>(this.url + username + "/education")
    .pipe(
      catchError(this.handleError<Education[]>("getEducations(uuid)" + username))
    );
  }

  /*getAssignment(id:number):Observable<Education> {
    console.log("getAssignment"+id)

   return this.http.get<Assignment>(this.url + "/" + id)
   .pipe(
     map(a => {
       a.nom += " MODIFIE PAR MAP....."
       return a;
     }),
     tap(a => {
       console.log("TAP : " + a.nom);
       return a;
     }),
     catchError(this.handleError<Assignment>(`getAssignment(id=${id})`))
   );
  }*/

  updateEducations(education:Education):Observable<any> {
    console.log("Modifié...");
    
    return this.http.put(this.url, education);
  }
}
