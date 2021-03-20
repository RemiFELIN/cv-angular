let Work = require('../model/aboutme/work');
let Workflow = require('../model/aboutme/workflow');
let Testimonial = require('../model/aboutme/testimonial');

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AboutMeSchema = Schema({
    id: Number,
    uuid: Number,
    language: String,
    presentation: String,
    works: [Work],
    workflow: [Workflow],
    testimonials: [Testimonial],
    clients: [String]
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('AboutMe', AboutMeSchema);