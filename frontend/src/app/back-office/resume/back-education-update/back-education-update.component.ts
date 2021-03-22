import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/models/education.model';
import { EducationService } from 'src/app/shared/education.service';

@Component({
  selector: 'app-back-education-update',
  templateUrl: './back-education-update.component.html',
  styleUrls: ['./back-education-update.component.css']
})
export class BackEducationUpdateComponent implements OnInit {

  constructor(private educationService:EducationService, private router:Router) { }

  ngOnInit(): void {
  }

  @Input() education:Education;
  @Input() new:boolean;

  onSaveEducation(){
    this.educationService.updateEducations(this.education)
    .subscribe(reponse => {
      console.log(reponse);
    })
  }

  onRemoveEducation(){
    this.educationService.deleteEducations(this.education)
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