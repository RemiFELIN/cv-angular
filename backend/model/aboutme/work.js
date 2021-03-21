let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let WorkSchema = Schema({
    area: String,
    icon_path: String,
    description: String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Work', WorkSchema);