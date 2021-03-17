import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../../models/education.model';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() education:Education;
}
