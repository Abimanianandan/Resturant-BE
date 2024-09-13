const Hotel7Controller = require("../controller.js/Hotel7Controller");
const express = require("express");

const Hotel7Router = express.Router();

Hotel7Router.post("/create",Hotel7Controller.create);
Hotel7Router.get("/getAllFoods",Hotel7Controller.getAllFood);

module.exports = Hotel7Router;