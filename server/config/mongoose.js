var mongoose = require('mongoose');

module.exports = function (config) {
  mongoose.connect(config.db);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connecton error...'));
  db.once('open', function callback() {
    console.log('multivision db opened');
  });
}