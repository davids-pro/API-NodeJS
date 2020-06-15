const mongoose = require('mongoose');

const PtuMount = mongoose.Schema({
  name: { type: String },
  localName: { type: String },
  swappable: { type: Boolean },
  data: { type: Object }
});

module.exports = mongoose.model('PtuMount', PtuMount);
