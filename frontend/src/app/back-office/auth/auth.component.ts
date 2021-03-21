import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LocalStorageService } from 'src/app/shared/local-storage.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username:string = "remi.felin";
  password:string = "remi";

  constructor(private userService:UserService, private router:Router, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }

  connection(){
    this.userService.login(new User(this.username, this.password))
    .subscribe(reponse => {
      console.log(reponse.message);
      this.persist("token", reponse.token);
      this.persist("username", this.username);
      this.router.navigate(["/fr", this.username, "back"]);
    });

  }

  persist(key: string, value: any) {
    this.localStorageService.set(key, value);
  }

}
