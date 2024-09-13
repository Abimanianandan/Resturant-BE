const Hotel4Controller = require("../controller.js/Hotel4Controller");
const express = require("express");

const Hotel4Router = express.Router();

Hotel4Router.post("/create",Hotel4Controller.create);
Hotel4Router.get("/getAllFoods",Hotel4Controller.getAllFood);

module.exports = Hotel4Router;