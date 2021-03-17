let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ExperienceSchema = Schema({
    id: Number,
    language: String,
    start_period: String,
    end_period: String,
    title: String,
    assignments: [{
        title: String,
        description: String,
        technologies: [String]
    }]
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Experience', ExperienceSchema);
