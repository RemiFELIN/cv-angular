let Formation = require('../model/formation');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les experiences (GET)
function getFormations(req, res){
    Formation.find((err, formations) => {
        if(err) res.send(err);
        res.send(formations);
        console.log(formations);
    });
}

// Récupérer une formation par le nom du diplome (GET)
function getFormation(req, res){
    let formationId = req.params.id;
    Experience.findOne({id: formationId}, (err, formation) =>{
        if(err) res.send(err);
        res.json(formation);
    })
}

// Ajout d'une formation (POST)
function postFormation(req, res){
    let formation = new Formation();
    formation.id = req.body.id;
    formation.langue = req.body.langue;
    formation.annee_debut = req.body.annee_debut;
    formation.annee_fin = req.body.annee_fin;
    formation.diplome = req.body.diplome;
    formation.description = req.body.description;
    formation.lien = req.body.lien;
    formation.save((err) => {
        if(err) res.send("can't post formation: ", err);
        res.json({ message: `'${formation.diplome}' diploma saved !`});
    });
}

// Update d'une formation (PUT)
function updateFormation(req, res) {
    Experience.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, formation) => {
        if(err) res.send(err);
        res.json({message: `updated`});
    });

}

// suppression d'une formation (DELETE)
function deleteFormation(req, res) {
    Formation.findByIdAndRemove(req.params.id, (err, formation) => {
        if(err) res.send(err);
        res.json({message: `'${formation.diplome}' diploma deleted`});
    })
}

module.exports = { getFormations, getFormation, postFormation, updateFormation, deleteFormation };
