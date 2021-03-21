import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { Experience } from 'src/app/models/experience.model';
import { EducationService } from 'src/app/shared/education.service';
import { ExperienceService } from 'src/app/shared/experience.service';

@Component({
  selector: 'app-back-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeBackComponent implements OnInit {

  educations: Education[] = [];
  experiences: Experience[] = [];

  constructor(private educationService:EducationService,
              private experienceService:ExperienceService) { }

  ngOnInit(): void {
    this.educationService.getEducations("fr", "remi.felin")
    .subscribe(a => {
      this.educations = a;
    })
    this.experienceService.getExperiences("fr", "remi.felin")
    .subscribe(a => {
      this.experiences = a;
    })
  }

}
