let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let FormationSchema = Schema({
    id: Number,
    langue: String,
    annee_debut: Number,
    annee_fin: Number,
    diplome: String,
    description: String,
    lien: String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Formation', FormationSchema);
