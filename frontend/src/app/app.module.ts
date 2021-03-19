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
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { FactScrollerComponent } from './portfolio/fact-scroller.component';

const routes:Routes = [
  { path:'resume', component: ResumeComponent},
  { path:'portfolio', component: PortfolioComponent},
  { path:'', component: HomeComponent},
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
    PortfolioComponent,
    FactScrollerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
