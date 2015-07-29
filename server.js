var koa = require('koa');
var mongoose = require('mongoose');
var graffiti = require('@risingstack/graffiti');
var graffitiMongoose = require('@risingstack/graffiti-mongoose');

var User = require('./models/user');
var Pet = require('./models/pet');

var app = koa();
var port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/graphql');

// attach graffiti middleware
app.use(graffiti.koa({
  prefix: '/graphql',
  adapter: graffitiMongoose,
  models: [User, Pet]
}));

// kick off server
if (!module.parent) {
  app.listen(port, function () {
    console.log('app is listening on ' + port);
  });
}

module.exports = app;
