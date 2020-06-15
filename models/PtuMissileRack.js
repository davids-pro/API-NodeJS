const mongoose = require('mongoose');

const PtuMissileRack = mongoose.Schema({
  name: { type: String },
  localName: { type: String },
  manufacturer: { type: String },
  swappable: { type: Boolean },
  data: { type: Object }
});

module.exports = mongoose.model('PtuMissileRack', PtuMissileRack);
