import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { EducationDetailComponent } from './resume/education-detail/education-detail.component';
import { ExperienceDetailComponent } from './resume/experience-detail/experience-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioScrollerComponent } from './portfolio/portfolio.component';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { FactScrollerComponent } from './portfolio/fact-scroller.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { ResumeBackComponent } from './back-office/resume/resume.component';
import { BackEducationFieldComponent } from './back-office/resume/back-education-field/back-education-field.component';
import { FormsModule } from '@angular/forms';
import { CvListComponent } from './cv-list/cv-list.component';
import { WorkComponent } from './about-me/work/work.component';
import { WorkflowComponent } from './about-me/workflow/workflow.component';
import { TestimonialComponent } from './about-me/testimonial/testimonial.component';
import { AuthComponent } from './back-office/auth/auth.component';
import { BackEducationCreateComponent } from './back-office/resume/back-education-create/back-education-create.component';

const routes:Routes = [
  { path:'home', component: HomeComponent },
  { path:':lang/:username', component: MenuComponent },
  { path:':lang/:username/home', component: HomeComponent },
  { path:':lang/:username/about-me', component: AboutMeComponent },
  { path:':lang/:username/resume', component: ResumeComponent },
  { path:':lang/:username/portfolio', component: PortfolioScrollerComponent },
  { path:':lang/:username/contact', component: ContactComponent },
  { path:'back', component: BackOfficeComponent },
  { path:'fr/:username/back', component: ResumeBackComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    EducationDetailComponent,
    ExperienceDetailComponent,
    HomeComponent,
    MenuComponent,
    PortfolioScrollerComponent,
    FactScrollerComponent,
    AboutMeComponent,
    ContactComponent,
    BackOfficeComponent,
    ResumeBackComponent,
    BackEducationFieldComponent,
    CvListComponent,
    NotFoundComponent,
    WorkComponent,
    WorkflowComponent,
    TestimonialComponent,
    AuthComponent,
    BackEducationCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ScrollingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
