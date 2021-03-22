# CV ANGULAR: PARTIE BACKEND

Cette partie vous présente les différents points notable

# Installation

Pour installer l'application (si vous souhaitez réaliser des tests en local), vous pouvez exécuter les commandes suivantes :

- npm install
- npm start

# Les petits plus de cette partie

Afin d'enrichir la version déjà existante du back sur votre intranet, nous avons ajouté les points suivants:

- Ajout des différents modèles sur notre cluster **MongoDB**; ajout des modèles et CRUD complet à l'aide de **Mongoose**

> Ajout des collections en français et en anglais, ainsi via un paramètre, nous pouvons filtrer les ressources en fonction de la langue utilisée

- Utilisation de la librairie **JSON WEB TOKEN** (en s'inspirant du tutoriel [suivant](https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/)), à noter que :

> Les mots de passe des utilisateurs sont encryptés avant d'être envoyé au cluster, le back prévoit un algorithme pour décrypter ce mot de passe lorsqu'un utilisateur souhaite se connecter "*d'un point de vue sécurité, c'est super !*"

> Les tokens générés (et valable 24h) nous permettent de retrouver l'utilisateur courant, et de ce fait, notre système peut facilement gérer les contraintes d'accès à nos services.

> Les endpoints dédiés à la modification et à la suppression de données personnelles sont exclusivement réservés à leurs propriétaires (utilisateurs connectés), le package [auth](https://github.com/RemiFELIN/cv-angular/tree/master/backend/auth)

# Déploiement Heroku

Après avoir *bien galéré* sur un premier déploiement dans lequel nous avons essayé de déployer à la fois le back et le front dans une seule et même application Heroku. Nous avons du changer de stratégie (la faute à Heroku, qui nous refuse l'écoute sur un port statique).

Nous avons ainsi décider de déployer à part le front et le back (donc 2 applications Heroku) dont les chemins sont les suivants:
- *un exemple de requete côté back* : https://cv-miage-backend.herokuapp.com/api/fr/remi.felin/detail
- le front : https://cv-miage-frontend.herokuapp.com
