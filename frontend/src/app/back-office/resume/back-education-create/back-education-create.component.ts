import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/shared/education.service';

@Component({
  selector: 'app-back-education-create',
  templateUrl: './back-education-create.component.html',
  styleUrls: ['./back-education-create.component.css']
})
export class BackEducationCreateComponent implements OnInit {

  start_year:number;
  end_year:number;
  diploma:string;
  description:string;
  link:string;

  constructor(private router:Router, private educationService:EducationService) { }

  ngOnInit(): void {
  }

  onCreateEducation() {
    const education:Education = new Education("remi.felin", "fr", this.start_year, this.end_year, this.diploma, this.description, this.link);
    this.educationService.addEducations(education)
    .subscribe(reponse => {
      console.log(reponse);
      this.reloadComponent();
    })
  }
  
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

}
