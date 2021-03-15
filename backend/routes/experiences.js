let Experience = require('../model/experience');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les experiences (GET)
function getExperiences(req, res){
    Experience.find((err, experiences) => {
        if(err) res.send(err);
        res.send(experiences);
        
        console.log("experiences");
        console.log(experiences);
    });
}

// Récupérer une experience par son titre (GET)
function getExperience(req, res){
    let experienceTitre = req.params.titre;
    Experience.findOne({titre: experienceTitre}, (err, experience) =>{
        if(err) res.send(err);
        res.json(experience);
    })
}

// Ajout d'une experience (POST)
function postExperience(req, res){
    let experience = new Experience();
    experience.langue = req.body.langue;
    experience.periode_debut = req.body.periode_debut;
    experience.periode_fin = req.body.periode_fin;
    experience.titre = req.body.titre;
    req.body.missions.forEach(function (item){
        mission = new Mission();
        mission.titre = item.titre;
        mission.description = item.description;
        mission.technologies = item.technologies;
        experience.missions.append(mission);
    });
    experience.save((err) => {
        if(err) res.send("can't post assignment: ", err);
        res.json({ message: `'${experience.diplome}' diploma saved !`});
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
        res.json({message: `'${experience.diplome}' diploma deleted`});
    })
}

module.exports = { getExperiences, postExperience, getExperience, updateExperience, deleteExperience };
