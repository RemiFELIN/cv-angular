let Information = require('../model/information');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer toutes les Informations (GET)
function getInformations(req, res){
    Information.find((err, informations) => {
        if(err) res.send(err);
        res.send(informations);
        console.log(informations);
    });
}

function getInformation(req, res){
    let username = req.params.username;
    Information.find({username: username}, (err, information) =>{
        if(err) res.send(err);
        res.json(information);
    });
}

// Ajout d'une Information (POST)
function postInformation(req, res){
    let information = new Information();
    information.username = req.body.username;
    information.language = req.body.language;
    information.name = req.body.name;
    information.surname = req.body.surname;
    information.age = req.body.age;
    information.title = req.body.title;
    information.phone = req.body.phone;
    information.mail = req.body.mail;
    information.linkedin = req.body.linkedin;
    information.driving_licence = req.body.driving_licence;
    information.github = req.body.github;
    information.acm_account = req.body.acm_account;
    information.address = req.body.adress;
    information.postal_code = req.body.postal_code;
    information.country = req.body.country;
    information.save((err) => {
        if(err) res.send("can't post information: ", err);
        res.json({ message: `Your informations has been saved !`});
    });
}

// Update d'une Information (PUT)
function updateInformation(req, res) {
    Information.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, information) => {
        if(err) res.send(err);
        res.json({message: `updated !`});
    });
}

// suppression d'une Information (DELETE)
function deleteInformation(req, res) {
    Information.findByIdAndRemove(req.params.id, (err, information) => {
        if(err) res.send(err);
        res.json({message: `informations deleted`});
    });
}

module.exports = { getInformations, getInformation, updateInformation, deleteInformation, postInformation };