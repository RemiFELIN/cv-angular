import { Component, Input, OnInit } from '@angular/core';
import { Work } from 'src/app/models/work.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() work:Work;

}
