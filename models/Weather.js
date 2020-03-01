var mongoose = require('mongoose');

let WeatherSchema = mongoose.Schema({
    date: { type: Date, default: Date.now },
    max: Number,
    min: Number,
    humidity: { type: Number, min: 0, max: 100},
});

let Weather = mongoose.model('Weather', WeatherSchema);

const create = (date = Date.now(), max, min, humidity) => {

  console.log("Creating Weather " + date);

  let weather = new Weather({date: date, max: max, min: min, humidity: humidity});

  return weather.save();
};

const find = (query) => {

    let params = {};

    if (query) {
        if (query.id) {
            params.id = query.id;
        }
    }

    return Weather.find(params).exec();

};

module.exports = {
    create,
    find
};