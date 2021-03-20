import { Component, OnInit } from '@angular/core';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { ExperienceService } from '../shared/experience.service';
import { EducationService } from '../shared/education.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  educations: Education[] = [];
  experiences: Experience[] = [];

  constructor(private route:ActivatedRoute,
              private experienceService:ExperienceService,
              private educationService:EducationService) { }

  ngOnInit(): void {
    /*this.educationService.getEducations()
    .subscribe(a => {
      this.educations = a;
    })*/
    let uuid = +this.route.snapshot.params.uuid;
     console.log("EDIT id = " + uuid);
 
     this.educationService.getEducations(uuid)
     .subscribe(a => {
       if(a) {
        this.educations = a;
       }
 
     });
  }

}
