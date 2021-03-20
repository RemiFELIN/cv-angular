let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PortfolioSchema = Schema({
    username: String,
    language: String,
    type: String,
    image: String,
    link: String,
    git: String,
    description: String,
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Portfolio', PortfolioSchema);