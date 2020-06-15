const mongoose = require('mongoose');

const PtuTurret = mongoose.Schema({
  name: { type: String },
  localName: { type: String },
  data: { type: Object }
});

module.exports = mongoose.model('PtuTurret', PtuTurret);
