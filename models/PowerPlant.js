const mongoose = require('mongoose');

const PowerPlant = mongoose.Schema({
  name: { type: String },
  localName: { type: String },
  manufacturer: { type: String },
  data: { type: Object }
});

module.exports = mongoose.model('PowerPlant', PowerPlant);
