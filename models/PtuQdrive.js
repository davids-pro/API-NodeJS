const mongoose = require('mongoose');

const PtuQdrive = mongoose.Schema({
  name: { type: String },
  localName: { type: String },
  manufacturer: { type: String },
  data: { type: Object }
});

module.exports = mongoose.model('PtuQdrive', PtuQdrive);
