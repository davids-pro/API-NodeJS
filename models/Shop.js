const mongoose = require('mongoose');

const Shop = mongoose.Schema({
  brand: { type: String },
  shops: { type: [] }
});

module.exports = mongoose.model('Shop', Shop);
