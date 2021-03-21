let Skill = require('../model/skill');
let Area = require('../model/skill/area');

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
function postSkill(req, res){
    let skill = new Skill();
    skill.username = req.params.username;
    skill.language = req.body.language;
    skill.type = req.body.type;
    req.body.areas.forEach(function (item){
        area = new Area();
        area.name = item.name;
        area.level = item.level;
        area.comment = item.comment;
        skill.areas.append(area);
    });
    skill.save((err) => {
        if(err) res.send("can't post skills: ", err);
        res.json({ message: `skills '${skill.type}' saved !`});
    });
}

// Update d'une Skill (PUT)
function updateSkill(req, res) {
    let _id = req.params._id;
    Skill.findOneAndUpdate({_id: _id}, req.body, {new: true}, (err, skill) => {
        if(err) res.send(err);
        res.json({message: `skill updated`});
    });
}

// suppression d'une Skill (DELETE)
function deleteSkill(req, res) {
    let _id = req.params._id;
    Skill.findOneAndRemove({_id: _id}, (err, skill) => {
        if(err) res.send(err);
        res.json({message: `skill deleted`});
    })
}

module.exports = { getSkills, getSkill, postSkill, updateSkill, deleteSkill };
