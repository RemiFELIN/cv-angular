let Experience = require('../model/experience');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les experiences (GET)
function getExperiences(req, res){
    Experience.find((err, experiences) => {
        if(err) res.send(err);
        res.send(experiences);
    });
}

// Récupérer une experience par son titre (GET)
function getExperience(req, res){
    let experienceId = req.params.id;
    Experience.findOne({id: experienceId}, (err, experience) =>{
        if(err) res.send(err);
        res.json(experience);
    })
}

// Ajout d'une experience (POST)
function postExperience(req, res){
    let experience = new Experience();
    experience.id = req.body.id;
    experience.language = req.body.language;
    experience.start_period = req.body.start_period;
    experience.end_period = req.body.end_period;
    experience.title = req.body.title;
    req.body.missions.forEach(function (item){
        mission = new Mission();
        mission.title = item.title;
        mission.description = item.description;
        mission.technologies = item.technologies;
        experience.missions.append(mission);
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
