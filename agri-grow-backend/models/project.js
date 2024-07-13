const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  description: { type: String, required: true },
  location: { type: String, required: true },
  harvestTime: { type: String, required: true },
  price: { type: Number, required: true },
  contact: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
