let Message = require('../model/message');

let User = require('../auth/user');
var VerifyToken = require('../auth/verifyToken');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les messages (GET)
function getMessages(req, res){
    Message.find((err, messages) => {
        if(err) res.send(err);
        res.send(messages);
    });
}

function getMessage(req, res){
    let username = req.params.username;
    Message.find({username: username}, (err, message) =>{
        if(err) res.send(err);
        res.json(message);
    });
}

// Ajout d'un message (POST)
function postMessage(req, res){
    let message = new Message();
    message.username = req.params.username;
    message.name = req.body.name;
    message.mail = req.body.mail;
    message.message = req.body.message;
    message.save((err) => {
        if(err) res.send("can't post message: ", err);
        res.json({ message: `Your message has been saved !`});
    });
}

// Update d'un message (PUT)
function updateMessage(req, res, next) {
    let _id = req.params._id;
    VerifyToken(req, res, next);
    User.findOne({_id: req.userId}, (err, user) => {
        if(err) res.status(500).send(err);
        if(!user) res.status(404).send("No user found.");
        // res.status(200).send(user);
        Message.findOneAndUpdate({_id: _id}, req.body, {new: true}, (err, message) => {
            if(err) res.send(err);
            res.json({message: `message updated !`});
        });
    });
}

// suppression d'un message (DELETE)
function deleteMessage(req, res, next) {
    let _id = req.params._id;
    VerifyToken(req, res, next);
    User.findOne({_id: req.userId}, (err, user) => {
        if(err) res.status(500).send(err);
        if(!user) res.status(404).send("No user found.");
        // res.status(200).send(user);
        Message.findOneAndRemove({_id: _id}, (err, message) => {
            if(err) res.send(err);
            res.json({message: `message deleted`});
        });
    });
}

module.exports = { getMessages, getMessage, updateMessage, deleteMessage, postMessage };