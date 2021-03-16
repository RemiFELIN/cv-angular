let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = Schema({
    id: Number,
    nom_utilisateur: String,
    mot_de_passe: String,
    nom: String,
    prenom: String,
    age: Number,
    metier: String,
    telephone: String,
    mail: String,
    linkedin: String,
    localisation: String,
    permis_conduire: String,
    github: String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('User', UserSchema);