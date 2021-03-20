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

// Récupérer un skill par son uuid (GET)
function getSkill(req, res){
    let skillUuid = req.params.uuid;
    Skill.find({uuid: skillUuid}, (err, skill) =>{
        if(err) res.send(err);
        res.json(skill);
    })
}

// Ajout d'une Skill (POST)
function postSkill(req, res){
    let skill = new Skill();
    skill.id = req.body.id;
    skill.uuid = req.body.uuid;
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
    Skill.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, skill) => {
        if(err) res.send(err);
        res.json({message: `updated`});
    });
}

// suppression d'une Skill (DELETE)
function deleteSkill(req, res) {
    Skill.findByIdAndRemove(req.params.id, (err, skill) => {
        if(err) res.send(err);
        res.json({message: `skills '${skill.type}' deleted`});
    })
}

module.exports = { getSkills, getSkill, postSkill, updateSkill, deleteSkill };
