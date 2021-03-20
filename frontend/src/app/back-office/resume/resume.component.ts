import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { Experience } from 'src/app/models/experience.model';
import { EducationService } from 'src/app/shared/education.service';

@Component({
  selector: 'app-back-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeBackComponent implements OnInit {

  educations: Education[] = [];
  experiences: Experience[] = [];

  constructor(private educationService:EducationService) { }

  ngOnInit(): void {
    this.educationService.getEducations(2)
    .subscribe(a => {
      this.educations = a;
    })
  }

}
