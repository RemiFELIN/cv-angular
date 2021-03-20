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
    const {uuid} = this.route.snapshot.params;
    this.routers = [
      {route: `/${uuid}/home`, nom: "Home"},
      {route: `/${uuid}/about-me`, nom: "About me"},
      {route: `/${uuid}/resume`, nom: "Resume"},
      {route: `/${uuid}/portfolio`, nom: "Portfolio"},
      {route: `/${uuid}/contact`, nom: "Contact"},
    ];
    console.log(this.routers);
    //this.routerLink = `/${this.route.snapshot.params.uuid}/resume`;
    console.log("uuid " + uuid);
  }

}
