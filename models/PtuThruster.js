const mongoose = require('mongoose');

const PtuThruster = mongoose.Schema({
  localName: { type: String },
  data: { type: Object }
});

module.exports = mongoose.model('PtuThruster', PtuThruster);
