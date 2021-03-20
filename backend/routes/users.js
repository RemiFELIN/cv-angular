let User = require('../model/user');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs
/** Using JSON Web Token to authenticate a current user and authorize various ressources */

// https://www.freecodecamp.org/news/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52/

// Récupérer tous les utilisateurs (GET)
function getUsers(req, res){
    User.find((err, users) => {
        if(err) res.send(err);
        res.send(users);
    });
}

function getUser(req, res){
    let username = req.params.username;
    User.find({username: username}, (err, user) => {
        if(err) res.send(err);
        res.send(user);
    });
}

// Se connecter
function login(req, res){
    User.findOne({ username: req.body.username }, (err, user) => {
        if(err) return res.status(500).send('Error on the server');
        if(!user) return res.status(404).send('No user found');

        var isValidPassword = bcrypt.compareSync(req.body.password, user.password);
        if(!isValidPassword) return res.status(401).send({auth: false, token: null});

        var token = jwt.sign({ id: user._id }, config.secret, {
            expiresIn: 86400 // == 24 hours
        })
    });
}

// se déconnecter
function logout(req, res){
    res.status(200).send({auth: false, token: null});
}

// Ajout d'un utilisateur (POST)
function register(req, res){
    let user = new User();
    // encrypt password
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = hashedPassword;
    user.save((err, user) => {
        if(err) res.status(500).send("can't save user: ", err);
        var token = jwt.sign({ id:user._id }, config.secret, {
            expiresIn: 86400 // == 24 houres
        });
        res.status(200).json({ auth:true, token: token, message: `'${user.nom_utilisateur}' saved !`});
    });
}

// Update d'un utilisateur (PUT)
function updateUser(req, res) {
    User.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, user) => {
        if(err) res.status(500).send(err);
        res.status(200).json({message: `updated`});
    });
}

// suppression d'un utilisateur (DELETE)
function deleteUser(req, res) {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if(err) res.status(500).send(err);
        res.status(200).json({message: `${user.nom_utilisateur} deleted`});
    });
}

module.exports = { getUsers, getUser, login, register, logout, deleteUser, updateUser };
