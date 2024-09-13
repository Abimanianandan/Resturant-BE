const mongoose = require("mongoose");

const Hotel6Schema = new mongoose.Schema({
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

module.exports = mongoose.model("Hotel6",Hotel6Schema,"foods6");
