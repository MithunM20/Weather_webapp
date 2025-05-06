const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: String,
  temp: Number,
  feelsLike: Number,
  description: String,
  icon: String,
  sunset: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Weather', weatherSchema);