const ResturantController = require("../controller.js/ResturantController");
const express = require("express");

const ResturantRouter = express.Router();

ResturantRouter.post("/create",ResturantController.create);
ResturantRouter.get("/allresturant",ResturantController.getAllResturant);
ResturantRouter.get("/:id",ResturantController.getResturantById);
ResturantRouter.put("/:id",ResturantController.updateResturantById);
ResturantRouter.delete("/:id",ResturantController.deleteResturantById);

module.exports = ResturantRouter;