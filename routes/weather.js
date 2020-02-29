var express = require('express');
var router = express.Router();

let weather = require('../models/Weather');

// Get current weather
router.get('/', (req, res) => {

  // Fetch today's weather from db

  // Create if doesnt exist

  console.log("Fetching current weather");

  // Return weather JSON
  weather.find().then((weather) => {
    res.json(weather);
  });

});

module.exports = router;
