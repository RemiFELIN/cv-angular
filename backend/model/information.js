let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let InformationSchema = Schema({
    id: Number,
    uuid: Number,
    language: String,
    name: String,
    surname: String,
    age: Number,
    title: String,
    phone: String,
    mail: String,
    linkedin: String,
    driving_licence: String,
    github: String,
    acm_account: String,
    adress: String,
    postal_code: String,
    country: String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Information', InformationSchema);