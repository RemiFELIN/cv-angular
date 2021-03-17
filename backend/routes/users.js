let User = require('../model/user');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les utilisateurs (GET)
function getUsers(req, res){
    User.find((err, users) => {
        if(err) res.send(err);
        res.send(users);
    });
}

// Récupérer un utilisateur par son id (GET)
function getUser(req, res){
    let userId = req.params.id;
    User.findOne({id: userId}, (err, user) =>{
        if(err) res.send(err);
        res.json(user);
    });
}

// Ajout d'un utilisateur (POST)
function postUser(req, res){
    let user = new User();
    user.id = req.body.id;
    user.nom_utilisateur = req.body.nom_utilisateur; 
    user.mot_de_passe = req.body.mot_de_passe;
    user.nom = req.body.nom;
    user.prenom = req.body.prenom;
    user.age = req.body.age;
    user.metier = req.body.metier;
    user.telephone = req.body.telephone;
    user.mail = req.body.mail;
    user.linkedin = req.body.linkedin;
    user.localisation = req.body.localisation;
    user.permis_conduire = req.body.permis_conduire;
    user.github = req.body.github;
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
