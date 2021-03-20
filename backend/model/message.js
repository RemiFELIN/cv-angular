let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MessageSchema = Schema({
    username: String,
    language: String,
    name: String,
    mail: String,
    message: String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Message', MessageSchema);