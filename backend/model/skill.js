let Area = require('../model/skill/area').schema;
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SkillSchema = Schema({
    id: Number,
    uuid: Number,
    language: String,
    type: String,
    areas: [Area]
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Skill', SkillSchema);