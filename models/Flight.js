const Flight = [];
module.exports = Flight;

/**
 * Using "exports.Flight = []" does not work when I call it in
 * my controller module and destructured it. Even after ensuring
 * that the app.json() function was called, the data still doesn't 
 * show up.
 */