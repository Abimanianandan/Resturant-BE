const Hotel2Controller = require("../controller.js/Hotel2Controller");
const express = require("express");

const Hotel2Router = express.Router();

Hotel2Router.post("/create",Hotel2Controller.create);
Hotel2Router.get("/getAllFoods",Hotel2Controller.getAllFood);

module.exports = Hotel2Router;