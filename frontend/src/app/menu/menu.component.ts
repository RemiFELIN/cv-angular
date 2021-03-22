import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  routers:Object[];
  //routerResume:string;

  constructor(private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    const {lang, username} = this.route.snapshot.params;
    this.routers = [
      {route: `/${lang}/${username}/home`, nom: "Home"},
      {route: `/${lang}/${username}/about-me`, nom: "About me"},
      {route: `/${lang}/${username}/resume`, nom: "Resume"},
      {route: `/${lang}/${username}/portfolio`, nom: "Portfolio"},
      {route: `/${lang}/${username}/contact`, nom: "Contact"},
    ];
  }

}
