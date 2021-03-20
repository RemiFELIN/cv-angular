let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TestimonialSchema = Schema({
    name: String,
    job: Number,
    message: String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Testimonial', TestimonialSchema);