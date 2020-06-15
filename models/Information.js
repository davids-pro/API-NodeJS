const mongoose = require('mongoose');

const Information = mongoose.Schema({
  liveVersion: { type: String },
  ptuVersion: { type: String },
  liveMaintenance: { type: Boolean },
  ptuMaintenance: { type: Boolean },
  openPtu: { type: Boolean },
  currentShip: { type: String }
});

module.exports = mongoose.model('Information', Information);
