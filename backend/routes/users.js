let User = require('../model/user');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les utilisateurs (GET)
function getUsers(req, res){
    User.find((err, users) => {
        if(err) res.send(err);
        res.send(users);
    });
}

// Récupérer un utilisateur par son uuid (GET)
function getUser(req, res){
    let userUuid = req.params.uuid;
    User.findOne({uuid: userUuid}, (err, user) =>{
        if(err) res.send(err);
        res.json(user);
    });
}

// Ajout d'un utilisateur (POST)
function postUser(req, res){
    let user = new User();
    user.uuid = req.body.uuid;
    user.username = req.body.username;
    user.password = req.body.password;
    user.save((err) => {
        if(err) res.send("can't post formation: ", err);
        res.json({ message: `'${user.nom_utilisateur}' saved !`});
    });
}

// Update d'un utilisateur (PUT)
function updateUser(req, res) {
    User.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, user) => {
        if(err) res.send(err);
        res.json({message: `updated`});
    });
}

// suppression d'un utilisateur (DELETE)
function deleteUser(req, res) {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if(err) res.send(err);
        res.json({message: `${user.nom_utilisateur} deleted`});
    });
}

module.exports = { getUsers, getUser, postUser, deleteUser, updateUser };
