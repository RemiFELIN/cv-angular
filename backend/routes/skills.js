let Skill = require('../model/skill');
let Area = require('../model/skill/area');

let User = require('../auth/user');
var VerifyToken = require('../auth/verifyToken');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les Skills (GET)
function getSkills(req, res){
    Skill.find((err, skills) => {
        if(err) res.send(err);
        res.send(skills);
    });
}

function getSkill(req, res){
    let username = req.params.username;
    let language = req.params.language;
    Skill.find({username: username, language: language}, (err, skill) =>{
        if(err) res.send(err);
        res.json(skill);
    })
}

// Ajout d'une Skill (POST)
function postSkill(req, res, next){
    VerifyToken(req, res, next);
    User.findOne({_id: req.userId}, (err, user) => {
        if(err) res.status(500).send(err);
        if(!user) res.status(404).send("No user found.");
        let skill = new Skill();
        skill.username = user.username;
        skill.language = req.body.language;
        skill.type = req.body.type;
        if(req.body.areas) {
            req.body.areas.forEach(function (item){
                area = new Area();
                area.name = item.name;
                area.level = item.level;
                area.comment = item.comment;
                skill.areas.append(area);
            });
        }
        skill.save((err) => {
            if(err) res.send("can't post skills: ", err);
            res.json({ message: `skills '${skill.type}' saved !`});
        });
    });
}

// Update d'une Skill (PUT)
function updateSkill(req, res, next) {
    let _id = req.params._id;
    VerifyToken(req, res, next);
    User.findOne({_id: req.userId}, (err, user) => {
        if(err) res.status(500).send(err);
        if(!user) res.status(404).send("No user found.");
        // res.status(200).send(user);
        Skill.findOneAndUpdate({_id: _id}, req.body, {new: true}, (err, skill) => {
            if(err) res.send(err);
            res.json({message: `skill updated`});
        });
    });
}

// suppression d'une Skill (DELETE)
function deleteSkill(req, res, next) {
    let _id = req.params._id;
    VerifyToken(req, res, next);
    User.findOne({_id: req.userId}, (err, user) => {
        if(err) res.status(500).send(err);
        if(!user) res.status(404).send("No user found.");
        // res.status(200).send(user);
        Skill.findOneAndRemove({_id: _id}, (err, skill) => {
            if(err) res.send(err);
            res.json({message: `skill deleted`});
        });
    });
}

module.exports = { getSkills, getSkill, postSkill, updateSkill, deleteSkill };
