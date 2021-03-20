let Message = require('../model/message');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les messages (GET)
function getMessages(req, res){
    Message.find((err, messages) => {
        if(err) res.send(err);
        res.send(messages);
    });
}

// Récupérer un message par son uuid (GET)
function getMessage(req, res){
    let messageUuid = req.params.uuid;
    Message.find({uuid: messageUuid}, (err, message) =>{
        if(err) res.send(err);
        res.json(message);
    });
}

// Ajout d'un message (POST)
function postMessage(req, res){
    let message = new Message();
    message.id = req.body.id;
    message.uuid = req.body.uuid;
    message.name = req.body.name;
    message.mail = req.body.mail;
    message.message = req.body.message;
    experience.save((err) => {
        if(err) res.send("can't post message: ", err);
        res.json({ message: `Your message has been saved !`});
    });
}

// Update d'un message (PUT)
function updateMessage(req, res) {
    Information.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, message) => {
        if(err) res.send(err);
        res.json({message: `Message updated !`});
    });
}

// suppression d'un message (DELETE)
function deleteMessage(req, res) {
    Information.findByIdAndRemove(req.params.id, (err, message) => {
        if(err) res.send(err);
        res.json({message: `Message deleted`});
    });
}

module.exports = { getMessages, getMessage, updateMessage, deleteMessage, postMessage };