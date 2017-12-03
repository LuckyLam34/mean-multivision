var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);

//setup message schema
// var messageSchema = mongoose.Schema({
//   message: String
// });

//model
// var Message = mongoose.model('Message', messageSchema);
// var mongoMessage;

// Message.findOne({}, function (err, messageDoc) {
//   mongoMessage = messageDoc.message;
// }); 

app.listen(config.port);
console.log('Listening on port ' + config.port + ' ...');