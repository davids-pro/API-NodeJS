const mongoose = require('mongoose');

const Turret = mongoose.Schema({
  name: { type: String },
  localName: { type: String },
  data: { type: Object }
});

module.exports = mongoose.model('Turret', Turret);
