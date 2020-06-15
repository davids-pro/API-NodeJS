const mongoose = require('mongoose');

const Loadout = mongoose.Schema({
  shortened: { type: String },
  loadout: { type: String }
});

module.exports = mongoose.model('Loadout', Loadout);
