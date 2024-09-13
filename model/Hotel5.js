const mongoose = require("mongoose");

const Hotel5Schema = new mongoose.Schema({
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

module.exports = mongoose.model("Hotel5",Hotel5Schema,"foods5");
