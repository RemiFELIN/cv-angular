let Experience = require('../model/experience');
let Assignment = require('../model/experience/assignment');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les experiences (GET)
function getExperiences(req, res){
    Experience.find((err, experiences) => {
        if(err) res.send(err);
        res.send(experiences);
    });
}

function getExperience(req, res){
    let username = req.params.username;
    let language = req.params.language;
    Experience.find({username: username, language: language}, (err, experience) =>{
        if(err) res.send(err);
        res.json(experience);
    })
}

// Ajout d'une experience (POST)
function postExperience(req, res){
    let experience = new Experience();
    experience.username = req.body.username;
    experience.language = req.body.language;
    experience.start_period = req.body.start_period;
    experience.end_period = req.body.end_period;
    experience.title = req.body.title;
    req.body.assignments.forEach(function (item){
        assignment = new Assignment();
        assignment.title = item.title;
        assignment.description = item.description;
        assignment.technologies = item.technologies;
        experience.assignments.append(assignment);
    });
    experience.save((err) => {
        if(err) res.send("can't post experience: ", err);
        res.json({ message: `experience '${experience.title}' saved !`});
    });
}

// Update d'une experience (PUT)
function updateExperience(req, res) {
    Experience.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, experience) => {
        if(err) res.send(err);
        res.json({message: `updated`});
    });
}

// suppression d'une experience (DELETE)
function deleteExperience(req, res) {
    Experience.findByIdAndRemove(req.params.id, (err, experience) => {
        if(err) res.send(err);
        res.json({message: `experience '${experience.title}' deleted`});
    })
}

module.exports = { getExperiences, postExperience, getExperience, updateExperience, deleteExperience };
