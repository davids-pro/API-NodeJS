const mongoose = require('mongoose');

const PtuWeapon = mongoose.Schema({
  name: { type: String },
  localName: { type: String },
  manufacturer: { type: String },
  type: { type: String },
  data: { type: Object }
});

module.exports = mongoose.model('PtuWeapon', PtuWeapon);
