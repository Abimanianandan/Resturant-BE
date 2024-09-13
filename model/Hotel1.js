const mongoose = require("mongoose");

const Hotel1Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  fooditem: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("hotel1",Hotel1Schema,"foods");
