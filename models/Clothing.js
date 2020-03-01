var mongoose = require('mongoose');

let ClothingSchema = mongoose.Schema({
   name: String,
   isJacket: Boolean,
   tempFactor: { type: Number, default: 0}
});

let Clothing = mongoose.model('Clothing', ClothingSchema);

const create = (name, isJacket = true, tempFactor = 0) => {

   console.log("Creating clothing article: " + name);

   let clothing = new Clothing({name: name, isJacket: isJacket, tempFactor: tempFactor});

   return clothing.save();
};

const find = (query) => {

   // TODO Implement queries

   return Clothing.find();

};

module.exports = {
    create,
    find
};