let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AreaSchema = Schema({
    name: String,
    level: Number,
    comment: String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Area', AreaSchema);