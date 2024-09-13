const Hotel8Controller = require("../controller.js/Hotel8Controller");
const express = require("express");

const Hotel8Router = express.Router();

Hotel8Router.post("/create",Hotel8Controller.create);
Hotel8Router.get("/getAllFoods",Hotel8Controller.getAllFood);

module.exports = Hotel8Router;