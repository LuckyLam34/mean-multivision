var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);

var User = mongoose.model('User');

passport.use(new LocalStrategy(function (username, password, done) {
  User.findOne({
    username: username
  }, function (err, user) {
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
}));

passport.serializeUser(function (user, done) {
  if (user) {
    done(null, user._id);
  }
});

passport.deserializeUser(function (user, done) {
  User.findOne({
    _id: id
  }, function (user, done) {
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
})

app.listen(config.port);
console.log('Listening on port ' + config.port + ' ...');