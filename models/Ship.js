const mongoose = require('mongoose');

const Ship = mongoose.Schema({
  name: { type: String },
  localName: { type: String },
  type: { type: String },
  focus: { type: String },
  manufacturer: { type: String },
  ctm: { type: String },
  size: { type: String },
  mass: { type: Number },
  length: { type: Number },
  cargoCapacity: { type: Number },
  maxCrew: { type: Number },
  fuelCapacity: { type: Number },
  qtFuelCapacity: { type: Number },
  maxSpeed: { type: Number },
  maxAfterburnSpeed: { type: Number },
  coolers: { type: [ String ] },
  emps: { type: [ String ] },
  missiles: { type: [] },
  powerPlants: { type: [ String ] },
  qdrives: { type: [ String ] },
  shields: { type: [ String ] },
  thrusters: { type: [ String ] },
  weapons: { type: [] },
  others: { type: [ String ] }
});

module.exports = mongoose.model('Ship', Ship);
