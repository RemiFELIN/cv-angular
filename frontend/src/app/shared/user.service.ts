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

  username:string;
  token:string;
  
  url = "https://cv-miage-backend.herokuapp.com/api/";

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

  login(user:User):Observable<any> {
    return this.http.post(this.url + "auth/login", user);
  }
}
