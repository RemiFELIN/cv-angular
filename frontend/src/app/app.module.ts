import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { EducationDetailComponent } from './resume/education-detail/education-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    EducationDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
