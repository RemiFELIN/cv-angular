import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/experience.model';
import { ExperienceService } from 'src/app/shared/experience.service';

@Component({
  selector: 'app-back-experience-update',
  templateUrl: './back-experience-update.component.html',
  styleUrls: ['./back-experience-update.component.css']
})
export class BackExperienceUpdateComponent implements OnInit {

  constructor(private experienceService:ExperienceService, private router:Router) { }

  ngOnInit(): void {
  }

  @Input() experience:Experience;

  onSaveExperience(){
    this.experienceService.updateExperiences(this.experience)
    .subscribe(reponse => {
      console.log(reponse);
    })
  }

  onRemoveExperience(){
    this.experienceService.deleteExperiences(this.experience)
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
