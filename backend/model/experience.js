let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ExperienceSchema = Schema({
    id: Number,
    langue: String,
    periode_debut: String,
    periode_fin: String,
    titre: String,
    missions: [{
        titre: String,
        description: String,
        technologies: [String]
    }]
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Experience', ExperienceSchema);
