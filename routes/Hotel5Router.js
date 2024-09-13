const Hotel5Controller = require("../controller.js/Hotel5Controller");
const express = require("express");

const Hotel5Router = express.Router();

Hotel5Router.post("/create",Hotel5Controller.create);
Hotel5Router.get("/getAllFoods",Hotel5Controller.getAllFood);

module.exports = Hotel5Router;