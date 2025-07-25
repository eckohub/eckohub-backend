const mongoose = require('mongoose');

const businessConfigSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rnc: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  currency: { type: String, default: 'DOP' },
  logoUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('BusinessConfig', businessConfigSchema);
