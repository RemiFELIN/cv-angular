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
let user = require('./auth/users');

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
app.route(prefix + '/:language/aboutmes')
  .get(aboutme.getAboutMes);

app.route(prefix + '/:language/:username/aboutme')
  .get(aboutme.getAboutMe)
  .post(aboutme.postAboutMe); 

app.route(prefix + '/:language/aboutme')
  .put(aboutme.updateAboutMe)
  .delete(aboutme.deleteAboutMe);

// EDUCATIONS
app.route(prefix + '/:language/educations')
  .get(education.getEducations);

app.route(prefix + '/:language/:username/educations')
  .get(education.getEducation)
  .post(education.postEducation);

app.route(prefix + '/:language/:username/education/:_id')
  .delete(education.deleteEducation)
  .put(education.updateEducation);

// EXPERIENCES
app.route(prefix + '/:language/experiences')
  .get(experience.getExperiences);

app.route(prefix + '/:language/:username/experiences')
  .get(experience.getExperience)
  .post(experience.postExperience);
  
app.route(prefix + '/:language/:username/experience/:_id')
  .delete(experience.deleteExperience)
  .put(experience.updateExperience);

// DETAILS
app.route(prefix + '/:language/details')
  .get(detail.getDetails);

app.route(prefix + '/:language/:username/detail')
  .get(detail.getDetail)
  .post(detail.postDetail);

app.route(prefix + '/:language/detail')
  .put(detail.updateDetail)
  .delete(detail.deleteDetail);

// MESSAGES
app.route(prefix + '/:language/messages')
  .get(message.getMessages);

app.route(prefix + '/:language/:username/messages')
  .get(message.getMessage)
  .post(message.postMessage);

app.route(prefix + '/:language/:username/message/:_id')
  .delete(message.deleteMessage)
  .put(message.updateMessage);

// PORTFOLIOS
app.route(prefix + '/:language/portfolios')
  .get(portfolio.getPortfolios);

app.route(prefix + '/:language/:username/portfolio')
  .get(portfolio.getPortfolio)
  .post(portfolio.postPortfolio);

app.route(prefix + '/:language/:username/portfolio/:_id')
  .delete(portfolio.deletePortfolio)
  .put(portfolio.updatePortfolio);

// SKILLS
app.route(prefix + '/:language/skills')
  .get(skill.getSkills);

app.route(prefix + '/:language/:username/skills')
  .get(skill.getSkill)
  .post(skill.postSkill);

app.route(prefix + '/:language/:username/skill/:_id')
  .delete(skill.deleteSkill)
  .put(skill.updateSkill);

// USERS
app.route(prefix + '/auth/register').post(user.register);
app.route(prefix + '/auth/login').post(user.login);
app.route(prefix + '/auth/logout').get(user.logout);

app.route(prefix + '/auth/me')
  .get(user.getAccount)
  .put(user.updatePassword)
  .delete(user.deleteUser);

app.route(prefix + '/users')
  .get(user.getUsers)

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;
