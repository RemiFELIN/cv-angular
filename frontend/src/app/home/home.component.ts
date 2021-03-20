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

  user:Information;

  constructor(private route:ActivatedRoute, 
    private router:Router,
    private informationService:InformationService) { }

  ngOnInit(): void {
    let uuid = this.route.snapshot.params.uuid;
    console.log(uuid)
    this.informationService.getInformationByUuid(uuid)
      .subscribe((user:Information) => {
        this.user = user;
        console.log("données reçues....")
        console.log(user.name)
      });
  }

}
