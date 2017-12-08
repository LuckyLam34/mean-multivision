var mongoose = require('mongoose');

module.exports = function (config) {
  mongoose.connect(config.db);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connecton error...'));
  db.once('open', function callback() {
    console.log('multivision db opened');
  });

  //creating user schema
  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String
  });

  //create user model
  var User = mongoose.model('User', userSchema);

  User.find({}, function (err, collection) {
    console.log(collection);

    if (collection.length === 0) {
      User.create({
        firstName: 'Jessie',
        lastName: 'J',
        username: 'jessiej'
      });

      User.create({
        firstName: 'Lady',
        lastName: 'Gaga',
        username: 'ladygaga'
      });

      User.create({
        firstName: 'Bruno',
        lastName: 'Mars',
        username: 'brunomars'
      })
    }
  })
}