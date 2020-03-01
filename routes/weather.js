var express = require('express');
var router = express.Router();

let weather = require('../models/Weather');

// Create weather entry
router.post('/', (req, res) => {

  // Validate request

  if (req.body) {


    const date = new Date(req.body.date * 1000);
    const min = req.body.min;
    const max = req.body.max;
    const humidity = req.body.humidity;


    weather.create(date, max, min, humidity).then((weather) => {
      res.json(weather);
    });
  }

});

// Get current weather
router.get('/', (req, res) => {

  // Fetch today's weather from db

  // Create if doesnt exist

  console.log("Fetching current weather");

  // Return weather JSON
  weather.find().then((weathers) => {
    res.json(weathers);
  });

});

module.exports = router;
