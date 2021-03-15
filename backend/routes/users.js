let User = require('../model/user');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les experiences (GET)
function getUsers(req, res){
    User.find((err, users) => {
        if(err) res.send(err);
        res.send(users);
        console.log(users);
    });
}

module.exports = { getUsers };
