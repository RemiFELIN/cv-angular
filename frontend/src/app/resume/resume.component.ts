import { Component, OnInit } from '@angular/core';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { ExperienceService } from '../shared/experience.service';
import { EducationService } from '../shared/education.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  educations: Education[] = [];
  /*  {
      id: 1,
      langue: "en",
      annee_debut: 2015,
      annee_fin: 2015,
      diplome: "A Levels - Science and Mathematics",
      description: "Initiation on applied mathematics tools to prepare a BSC",
      lien: null
    },
    {
      id: 2,
      langue: "fr",
      annee_debut: 2015,
      annee_fin: 2015,
      diplome: "Baccalauréat série S",
      description: "Option Mathematiques pour préparer une licence dans ce domaine.",
      lien: null
    },
    {
      id: 3,
      langue: "en",
      annee_debut: 2015,
      annee_fin: 2018,
      diplome: "BSC - Applied Mathematics on Socials Sciences (MASS) (Today call MIASHS)",
      description: "In this syllabus, i learn fundamentals concepts related to applied mathematics, informatics methods and economics topics.",
      lien: "https://univ-cotedazur.fr/offre-de-formation/licence-mathematiques-et-informatique-appliquees-aux-sciences-humaines-et-sociales"
    },
  ];*/
  experiences: Experience[] = [];
  /*experiences: Experience[] = [
    {
      id: 1,
      langue: "fr",
      periode_debut: "septembre 2019",
      periode_fin: "fevrier 2021",
      titre: "Alternance - SOPRA STERIA - Sophia-Antipolis",
      missions: null
    },
    {
      id: 2,
      langue: "en",
      periode_debut: "september 2019",
      periode_fin: "fevrier 2021",
      titre: "test",
      missions: null
    },
    {
      id: 3,
      langue: "fr",
      periode_debut: "septembre 2019",
      periode_fin: "fevrier 2021",
      titre: "test2",
      missions: null
    },
  ];*/

  constructor(private experienceService:ExperienceService,
              private educationService:EducationService) { }

  ngOnInit(): void {
    this.experienceService.getExperiences()
    .subscribe(a => {
      this.experiences = a;
    })
    this.educationService.getExperiences()
    .subscribe(a => {
      this.educations = a;
    })
  }

}
