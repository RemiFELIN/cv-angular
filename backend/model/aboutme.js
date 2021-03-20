let Work = require('../model/aboutme/work').schema;
let Workflow = require('../model/aboutme/workflow').schema;
let Testimonial = require('../model/aboutme/testimonial').schema;

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AboutMeSchema = Schema({
    username: String,
    language: String,
    presentation: String,
    works: [Work],
    workflow: [Workflow],
    testimonials: [Testimonial],
    clients: [String]
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('AboutMe', AboutMeSchema);