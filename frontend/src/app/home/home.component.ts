import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Information } from '../models/information.model';
import { InformationService } from '../shared/information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  informations:Information;

  constructor(private route:ActivatedRoute, 
    private router:Router,
    private informationService:InformationService) { }

  ngOnInit(): void {
    let {lang, username} = this.route.snapshot.params;
 
     this.informationService.getInformations(lang, username)
     .subscribe(a => {
       if(a) {
        this.informations = a[0];
       }
     });
  }

}
