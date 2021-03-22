import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/shared/experience.service';

@Component({
  selector: 'app-back-experience-create',
  templateUrl: './back-experience-create.component.html',
  styleUrls: ['./back-experience-create.component.css']
})
export class BackExperienceCreateComponent implements OnInit {

  start_period:number;
  end_period:number;
  title:string;
  description:string;
  link:string;

  constructor(private router:Router, private experienceService:ExperienceService) { }

  ngOnInit(): void {
  }

  onCreateExperience() {
    const experience:Experience = new Experience("remi.felin", "fr", this.start_period, this.end_period, this.link, this.description, this.link);
    this.experienceService.addExperiences(experience)
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
