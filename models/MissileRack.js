const mongoose = require('mongoose');

const MissileRack = mongoose.Schema({
  name: { type: String },
  localName: { type: String },
  manufacturer: { type: String },
  swappable: { type: Boolean },
  data: { type: Object }
});

module.exports = mongoose.model('MissileRack', MissileRack);
