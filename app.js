
/**
 * Module dependencies.
 */

var express = require('express'),
    models = require('./app/models/courses.model.js'),
    winston = require('winston'),
    mongoose = require('mongoose'),
    config = require('config'),
    courseController = require('./app/controllers/courseController.js')
  , routes = require('./routes');

//require('app/models/courses.model.js');
var dbConfig = config.get('database');
winston.add(winston.transports.File, {
  filename: 'public/logs/adcore.log',
  handleExceptions: true,
  humanReadableUnhandledException: true
});
mongoose.connect(dbConfig.get('path') + dbConfig.get('name'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('yay!');
});
var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/courses/:page/:limit', routes.getCourses);
app.put('/courses/', routes.updateCourse);
app.post('/courses/', routes.createCourse);
app.put('/courses/delete/:id', routes.deleteCourse);
app.get('/courses/:page/:limit', routes.getCourses);
app.get('/universities/:val', routes.getUniversities);
app.get('/countries/:val', routes.getCountries);
app.get('/cities/:val', routes.getCities);
app.get('/currency/:val', routes.getCurrency);


courseController.init();
app.listen(3003, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
