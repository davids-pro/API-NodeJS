const mongoose = require('mongoose');

const Thruster = mongoose.Schema({
  localName: { type: String },
  data: { type: Object }
});

module.exports = mongoose.model('Thruster', Thruster);
