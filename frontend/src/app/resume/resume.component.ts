import { Component, OnInit } from '@angular/core';
import { Education } from './education-detail/education.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  educations: Education[] = [
    {
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
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
