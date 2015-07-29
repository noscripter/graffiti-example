var mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
  name: {
    type: String
  },
  type: {
    type: String
  },
  age: {
    type: Number
  }
});

var Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
