const Hotel6Controller = require("../controller.js/Hotel6Controller");
const express = require("express");

const Hotel6Router = express.Router();

Hotel6Router.post("/create",Hotel6Controller.create);
Hotel6Router.get("/getAllFoods",Hotel6Controller.getAllFood);

module.exports = Hotel6Router;