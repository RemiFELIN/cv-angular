let Detail = require('../model/detail');

let User = require('../auth/user');
var VerifyToken = require('../auth/verifyToken');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les Details (GET)
function getDetails(req, res){
    Detail.find((err, details) => {
        if(err) res.send(err);
        res.send(details);
    });
}

function getDetail(req, res){
    let username = req.params.username;
    let language = req.params.language;
    Detail.find({username: username, language: language}, (err, detail) =>{
        if(err) res.send(err);
        res.json(detail);
    });
}

// Ajout d'un Detail (POST)
function postDetail(req, res){
    VerifyToken(req, res, next);
    User.findOne({_id: req.userId}, (err, user) => {
        if(err) res.status(500).send(err);
        if(!user) res.status(404).send("No user found.");
        let detail = new Detail();
        detail.username = user.username;
        detail.language = req.body.language;
        detail.name = req.body.name;
        detail.surname = req.body.surname;
        detail.age = req.body.age;
        detail.title = req.body.title;
        detail.phone = req.body.phone;
        detail.mail = req.body.mail;
        detail.linkedin = req.body.linkedin;
        detail.driving_licence = req.body.driving_licence;
        detail.github = req.body.github;
        detail.acm_account = req.body.acm_account;
        detail.address = req.body.adress;
        detail.postal_code = req.body.postal_code;
        detail.country = req.body.country;
        detail.save((err) => {
            if(err) res.send("can't post detail: ", err);
            res.json({ message: `Your detail has been saved !`});
        });
    });
}

// Update d'un detail (PUT)
function updateDetail(req, res, next) {
    VerifyToken(req, res, next);
    User.findOne({_id: req.userId}, (err, user) => {
        if(err) res.status(500).send(err);
        if(!user) res.status(404).send("No user found.");
        // res.status(200).send(user);
        Detail.findOneAndUpdate({username: user.username}, req.body, {new: true}, (err, detail) => {
            if(err) res.send(err);
            res.json({message: `details updated`});
        });
    });
}

// suppression d'un Detail (DELETE)
function deleteDetail(req, res, next) {
    VerifyToken(req, res, next);
    User.findOne({_id: req.userId}, (err, user) => {
        if(err) res.status(500).send(err);
        if(!user) res.status(404).send("No user found.");
        // res.status(200).send(user);
        Detail.findOneAndRemove({username: user.username}, (err, detail) => {
            if(err) res.send(err);
            res.json({message: `details deleted`});
        });
    });
}

module.exports = { getDetails, getDetail, updateDetail, deleteDetail, postDetail };