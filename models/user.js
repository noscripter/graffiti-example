var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number,
    index: true
  },
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  pets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet'
  }],
  createdAt: {
    type: Date,
    'default': Date.now
  }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
