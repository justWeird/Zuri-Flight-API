const Flights = require("../models/Flight");

//get all flights
exports.getAllFlights = async (req, res) => {
  try {
    const flights = Flights;
    res.status(200).json({
      msg: "All scheduled Flights",
      Flights: flights,
    }); //outputting the content found in Flights which is imported from model folder
  } catch (error) {
    res.status(500).json({ msg: error.msg }); //outputting status code of server error
  } //use an asynchronous call and the try catch that goes with it
};

//create a flight
exports.createFlight = async (req, res) => {
  try {
    const flight = await req.body; //await waits and then checks to see the data in the body of the request
    Flights.push(flight); //push the data gotten from the body into array in flight
    res.status(200).json({
      msg: "New Flight Created",
      flight,
    });
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

//get single flight - this uses the array[index] positioning
//to find the flights in that index.
exports.getFlight = async (req, res) => {
  try {
    let id = req.params.id; //get index to identify the flight to be gotten
    const flight = Flights[id];
    res.status(200).json({
      msg: `Flight at index ${id} found`,
      flight,
    });
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

//update a flight
exports.updateFlight = async (req, res) => {
  try {
    let id = req.params.id; //get index to identify the flight to be updated
    const updateFlight = await req.body; //data from request with updated data
    Flights[id] = updateFlight;
    const currFlight = Flights[id];
    res.status(200).json({
      msg: `Flight ${id} has been updated`,
      currFlight,
    });
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};

//delete a flight
exports.deleteFlight = async (req, res) => {
  try {
    let id = req.params.id; //get index to identify the flight to be removed
    const delFlight = Flights.splice(id, 1); //this removes the object from the array
    res.status(200).json({
      msg: `Flight at index ${id} has been deleted`,
      delFlight
    });
  } catch (error) {
    res.status(500).json({ msg: error.msg });
  }
};


