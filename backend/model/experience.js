let Assignment = require('./experience/assignment').schema;
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ExperienceSchema = Schema({
    id: Number,
    uuid: Number,
    language: String,
    start_period: String,
    end_period: String,
    title: String,
    assignments: [Assignment]
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Experience', ExperienceSchema);
