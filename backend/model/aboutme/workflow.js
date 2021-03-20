let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let WorkflowSchema = Schema({
    step: String,
    description: String
});

// C'est à travers ce modèle Mongoose qu'on pourra faire le CRUD
module.exports = mongoose.model('Workflow', WorkflowSchema);