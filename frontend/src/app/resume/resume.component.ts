import { Component, OnInit } from '@angular/core';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { ExperienceService } from '../shared/experience.service';
import { EducationService } from '../shared/education.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  educations: Education[] = [];
  experiences: Experience[] = [];

  constructor(private experienceService:ExperienceService,
              private educationService:EducationService) { }

  ngOnInit(): void {
    this.experienceService.getExperiences()
    .subscribe(a => {
      this.experiences = a;
    })
    this.educationService.getExperiences()
    .subscribe(a => {
      this.educations = a;
    })
  }

}
