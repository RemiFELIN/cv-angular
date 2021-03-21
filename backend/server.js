let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let aboutme = require('./routes/aboutmes');
let education = require('./routes/educations');
let experience = require('./routes/experiences');
let detail = require('./routes/details');
let message = require('./routes/messages');
let portfolio = require('./routes/portfolios');
let skill = require('./routes/skills');
let user = require('./routes/users');

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongoose.set('debug', true);

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
const uri = 'mongodb+srv://admin:admin@cluster0.w31xz.mongodb.net/cv?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
};

mongoose.connect(uri, options)
  .then(() => {
      console.log("URI = " + uri);
      console.log("Connecté à la base MongoDB dans le cloud !");
    },
    err => { 
      console.log('Erreur de connexion: ', err); 
    }
  );

// Pour accepter les connexions cross-domain (CORS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';

// ABOUTMES
app.route(prefix + '/aboutmes')
  .get(aboutme.getAboutMes)
  .post(aboutme.postAboutMe)
  .put(aboutme.updateAboutMe);

app.route(prefix + '/:username/aboutme')
  .get(aboutme.getAboutMe)
  .delete(aboutme.deleteAboutMe); 

// EDUCATIONS
app.route(prefix + '/educations')
.get(education.getEducations)
.post(education.postEducation)
.put(education.updateEducation);

app.route(prefix + '/:username/education')
.get(education.getEducation)
.delete(education.deleteEducation);

// EXPERIENCES
app.route(prefix + '/experiences')
  .get(experience.getExperiences)
  .post(experience.postExperience)
  .put(experience.updateExperience);

app.route(prefix + '/:username/experience')
  .get(experience.getExperience)
  .delete(experience.deleteExperience); 

// DETAILS
app.route(prefix + '/details')
.get(detail.getDetails)
.post(detail.postDetail)
.put(detail.updateDetail);

app.route(prefix + '/:username/detail')
.get(detail.getDetail)
.delete(detail.deleteDetail);

// MESSAGES
app.route(prefix + '/messages')
.get(message.getMessages)
.post(message.postMessage)
.put(message.updateMessage);

app.route(prefix + '/:username/message')
.get(message.getMessage)
.delete(message.deleteMessage);

// PORTFOLIOS
app.route(prefix + '/portfolios')
.get(portfolio.getPortfolios)
.post(portfolio.postPortfolio)
.put(portfolio.updatePortfolio);

app.route(prefix + '/:username/portfolio')
.get(portfolio.getPortfolio)
.delete(portfolio.deletePortfolio);

// SKILLS
app.route(prefix + '/skills')
.get(skill.getSkills)
.post(skill.postSkill)
.put(skill.updateSkill);

app.route(prefix + '/:username/skill')
.get(skill.getSkill)
.delete(skill.deleteSkill);

// USERS
app.route(prefix + '/users')
  .get(user.getUsers)
  .post(user.register)
  .put(user.updateUser);

app.route(prefix + '/:username/users')
  .get(user.getUser)
  .delete(user.deleteUser);

/*
app.route(prefix + '/user').get((req, res) => {
  var token = req.headers['x-access-token'];
  if(!token) return res.status(401).send({auth: false, message: 'No token provided.'});
  jwt.verify(token, config.secret, (err, decoded) => {
    if(err) return res.status(500).send({auth: false, message: 'Failed to authenticate token'});
    res.status(200).send(decoded);
  });
});

app.route(prefix + '/login').post(user.login);
*/

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;
