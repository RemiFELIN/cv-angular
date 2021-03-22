import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutMe } from '../models/about-me.model';
import { AboutMeService } from '../shared/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  aboutMe:AboutMe;

  constructor(private route:ActivatedRoute, private aboutMeService:AboutMeService) { }

  ngOnInit(): void {
    let {lang, username} = this.route.snapshot.params;
 
     this.aboutMeService.getAboutMe(lang, username)
     .subscribe(a => {
       if(a) {
        this.aboutMe = a[0];
       }
     });
  }

}
