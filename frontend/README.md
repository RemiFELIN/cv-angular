# CvAngular : Front

## Points intéressants
Nous avons beaucoup travaillé sur la modularité de notre site afin de pouvoir faire une sorte de CMS pour nos CV Web.
Le projet Front est découpé en deux, le Back-office dans lequel nous pouvons modifier les informations de notre compte (seulement educations et experiences pour l'instant) et la partie Front qui correspond a toutes les pages et tous les composants du CV web.

Un point intéressant que nous prendrons le temps de mieux exploiter est le scroll infini de nos projets dans l'onglet portfolio. Nous nous sommes inspiré de ce site : [Scroll infini](https://www.digitalocean.com/community/tutorials/angular-infinite-scroll) et nous l'avons arrangé pour nos projets. Cette dernière boucle sur tous les portfolios de l'utilisateur.

Nous avons également essayé de gérer les langues de notre site grâce au /fr et /en de l'url. Tout est basé sur la puissance des routeurs que vous trouverez en détail dans le fichier app.module.ts et dans le dossier menu/menu.component.ts.

## Back-office
Nous qualifions de back-office l'interface utilisateur permettant de ajouter/modifier/supprimer les données liées au compte.
Actuellement, vous pouvez vous connecter à un compte utilisateur avec identifiant et mot de passe (ex: remi.felin, remi) et vous ne pouvez que modifier la partie "resume" du CV web.
Les détails sur la connexion et notamment le système de token se trouvent dans le [README](https://github.com/RemiFELIN/cv-angular/tree/master/backend) du back-end.

Évidemment la suite du développement ne consiste qu'a copier et adapter le code déjà existant, l'entièreté du back-office devrait être disponible bientôt.

## Comment lancer le Front ?
Pas besoin de lancer quoi-que ce soit ! **Rendez-vous ici** : [CV Angular](https://cv-miage-frontend.herokuapp.com/)

Mais vous pouvez également lancer le code en local :
Il suffit d'ouvrir un terminal puis de faire la commande ng serve.
Si vous souhaitez lancer le code en local vous pouvez changer ces liens dans le dossier shared, pour chaque fichier service il y a un attribut url.

## Que reste il a améliorer ?
Il reste pleins d'améliorations possibles mais le gros du développement est déjà là. La prochaine étape sera de rendre l'application plus jolie en se basant sur Angular Material ou Bootstrap.

Le second point est la personnalisation à améliorer car toutes les données sont en base de données, il ne reste plus qu'a copier et adapter le code existant dans le back-office/resume et créer des modules pour le reste de l'application.

Enfin, la patrtie langue est déja bien avancé mais il reste l'édition en anlgais à gerer.

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
