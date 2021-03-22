import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { Experience } from 'src/app/models/experience.model';
import { EducationService } from 'src/app/shared/education.service';
import { ExperienceService } from 'src/app/shared/experience.service';
import { LocalStorageService } from 'src/app/shared/local-storage.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-back-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeBackComponent implements OnInit {

  educations: Education[];
  experiences: Experience[];
  newEducation: Education;

  constructor(private educationService:EducationService,
              private experienceService:ExperienceService,
              private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    const token = this.localStorageService.get("token");
    const username = this.localStorageService.get("username");

    this.educationService.getEducations("fr", username)
     .subscribe(a => {
       if(a) {
        this.educations = a;
       }
     });

     this.experienceService.getExperiences("fr", username)
      .subscribe(a => {
        if(a) {
         this.experiences = a;
        }
      });
  }

}
