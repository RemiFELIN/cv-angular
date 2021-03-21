import { Component, Input, OnInit } from '@angular/core';
import { Workflow } from 'src/app/models/workflow.model';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() workflow:Workflow;
}
