const mongoose = require('mongoose');

const Weapon = mongoose.Schema({
  name: { type: String },
  localName: { type: String },
  manufacturer: { type: String },
  type: { type: String },
  data: { type: Object }
});

module.exports = mongoose.model('Weapon', Weapon);
