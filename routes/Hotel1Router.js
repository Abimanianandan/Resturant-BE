const Hotel1Controller = require("../controller.js/Hotel1Controller");
const express = require("express");

const Hotel1Router = express.Router();

Hotel1Router.post("/create",Hotel1Controller.create);
Hotel1Router.get("/getAllFoods",Hotel1Controller.getAllFood);

module.exports = Hotel1Router;