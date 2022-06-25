const express = require("express");

const router = express.Router();
const controller = require("../controllers/flightController");

router
  .get("/", controller.getAllFlights)   //get method for all flights
  .post("/", controller.createFlight)   //post method to create flights
  .get("/:id", controller.getFlight)    //get method for a flight
  .put("/:id", controller.updateFlight) //put method to update a flight
  .delete("/:id", controller.deleteFlight); //delete method to remove a flight

  //the router methods are concatenated and the last method is terminated using ';'

module.exports = router;
