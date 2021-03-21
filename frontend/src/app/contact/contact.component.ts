import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Information } from '../models/information.model';
import { InformationService } from '../shared/information.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  informations:Information;

  constructor(private route:ActivatedRoute,
    private informationService:InformationService) { }

  ngOnInit(): void {
    let {lang, username} = this.route.snapshot.params;
 
     this.informationService.getInformations(lang, username)
     .subscribe(a => {
       if(a) {
        this.informations = a[0];
        console.log(this.informations)
       }
     });
  }

}
