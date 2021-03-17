import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() experience:Experience;
}
