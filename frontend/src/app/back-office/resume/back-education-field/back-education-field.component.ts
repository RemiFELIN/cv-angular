import { Component, Input, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/shared/education.service';

@Component({
  selector: 'app-back-education-field',
  templateUrl: './back-education-field.component.html',
  styleUrls: ['./back-education-field.component.css']
})
export class BackEducationFieldComponent implements OnInit {

  constructor(private educationService:EducationService) { }

  ngOnInit(): void {
    console.log(this.education)
    console.log(this.new)
  }

  @Input() education:Education;
  @Input() new:boolean;

  onSaveEducation(){
    console.log(JSON.stringify(this.education));
    this.educationService.updateEducations(this.education)
    .subscribe(reponse => {
      console.log("Ok");
    })
  }

  onCreateEducation(){
    console.log(JSON.stringify(this));
    this.educationService.updateEducations(this.education)
    .subscribe(reponse => {
      console.log("Ok");
    })
  }
}