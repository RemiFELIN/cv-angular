let AboutMe = require('../model/aboutme');
let Work = require('../model/aboutme/work');
let Workflow = require('../model/aboutme/workflow');
let Testimonial = require('../model/aboutme/testimonial');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les AboutMes (GET)
function getAboutMes(req, res){
    AboutMe.find((err, aboutMes) => {
        if(err) res.send(err);
        res.send(aboutMes);
    });
}

function getAboutMe(req, res){
    let username = req.params.username;
    AboutMe.find({username: username}, (err, aboutme) =>{
        if(err) res.send(err);
        res.json(aboutme);
    });
}

// Ajout d'un AboutMe (POST)
function postAboutMe(req, res){
    let aboutme = new AboutMe();
    aboutme.username = req.body.username;
    aboutme.language = req.body.language;
    aboutme.presentation = req.body.presentation;
    req.body.works.forEach(function (item){
        work = new Work();
        work.area = item.area;
        work.icon_path = item.icon_path;
        assignment.description = item.description;
        aboutme.works.append(work);
    });
    req.body.workflow.forEach(function (item){
        wf = new Workflow();
        wf.step = item.step;
        wf.description = item.description;
        aboutme.workflow.append(wf);
    });
    req.body.testimonials.forEach(function (item){
        testimonial = new Testimonial();
        testimonial.name = item.name;
        testimonial.job = item.job;
        testimonial.message = item.message;
        aboutme.testimonials.append(testimonial);
    });
    aboutme.clients = req.body.clients;
    aboutme.save((err) => {
        if(err) res.send("can't post aboutMe: ", err);
        res.json({ message: `Your aboutMe has been saved !`});
    });
}

// Update d'une Information (PUT)
function updateAboutMe(req, res) {
    AboutMe.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, aboutMe) => {
        if(err) res.send(err);
        res.json({message: `aboutMe updated !`});
    });
}

// suppression d'une Information (DELETE)
function deleteAboutMe(req, res) {
    AboutMe.findByIdAndRemove(req.params.id, (err, aboutMe) => {
        if(err) res.send(err);
        res.json({message: `aboutMe deleted`});
    });
}

module.exports = { getAboutMe, getAboutMes, updateAboutMe, deleteAboutMe, postAboutMe };