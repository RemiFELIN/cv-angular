import { Component, Input, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/models/testimonial.model';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() testimonial:Testimonial;

}
