# CvAngular : Front

## Points intéressants
Nous avons pas mal travaillé sur la modularité de notre site afin de pouvoir faire une sorte de CMS pour CV.
Le projet Front est découpé en deux, le Back-office dans lequel nous pouvons modifier les informations de notre compte (seulement educations et experiences pour l'instant) et la partie Front qui correspond a toutes les pages et tout les composants du CV web.

Un point interessant que nous prendrons le temps de mieux exploiter est le scroll infini de nos projets dans l'onglet portfolio. Nous nous sommes inspiré de ce site : https://www.digitalocean.com/community/tutorials/angular-infinite-scroll et nous l'avons arrangé pour nos projets. Ce dernier boucle sur tout les portfolio de l'utilisateur.

Nous avons également essayé de gerer les langues de notre site grace au /fr et /en de l'url. Tout est basé sur la puissance des routeurs que vous trouverez en détail dans le fichier app.module.ts et dans le dossier menu/menu.component.ts.

## Back-office
Nous qualifions de back-office l'interface utilisateur permettant de ajouter/modifier/supprimer les données liées au compte.
Actuellement, vous pouvez vous connecter a un compte utilisateur avec identifiant et mot de passe (ex: remi.felin, remi) et vous ne pouvez que modifier la partie "resume" du CV web. 
Les détails sur la connexion et notament le système de token se trouvent dans le README.md du back-end.

Evidemment la suite du développement ne consiste qu'a copier et adapter le code déja existant, l'entiereté du back-office devrait être disponible bientot.

## Comment lancer le Front ?
Il suffit d'ouvrir un terminal puis de faire la commande ng serve.
Par défaut tout les liens pointent sur notre serveur Heroku si vous souhaitez lancer le code en local vous pouvez changer ces liens dans le dossier shared, pour chaque fichiers.

# Default readme CvAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
