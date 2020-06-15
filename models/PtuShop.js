const mongoose = require('mongoose');

const PtuShop = mongoose.Schema({
  brand: { type: String },
  shops: { type: [] }
});

module.exports = mongoose.model('PtuShop', PtuShop);
