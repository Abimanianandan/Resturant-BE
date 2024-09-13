const Hotel3Controller = require("../controller.js/Hotel3Controller");
const express = require("express");

const Hotel3Router = express.Router();

Hotel3Router.post("/create",Hotel3Controller.create);
Hotel3Router.get("/getAllFoods",Hotel3Controller.getAllFood);

module.exports = Hotel3Router;