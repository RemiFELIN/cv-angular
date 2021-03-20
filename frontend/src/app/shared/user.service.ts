import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Education } from '../models/education.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:8010/api/users";

  constructor(private http:HttpClient) { }

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    };
  }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.url)
    .pipe(
      catchError(this.handleError<User[]>("getUsers()"))
    );
  }

  getUserByUuid(uuid):Observable<User> {
    console.log(this.url + "/" + uuid)
    return this.http.get<User>(this.url + "/" + uuid)
    .pipe(
      catchError(this.handleError<User>("getUserByUuid(uuid)"))
    );
  }
}
