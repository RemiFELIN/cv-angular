let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EducationSchema = Schema({
    username: String,
    language: String,
    start_year: Number,
    end_year: Number,
    diploma: String,
    description: String,
    link: String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Education', EducationSchema);
