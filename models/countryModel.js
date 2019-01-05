const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    population: String,
    governor: String,
    opinion: String,
    scores: Number,
    state: String,
    precentage:String,
    governor_opinion:String
});



const Country = mongoose.model('Country', countrySchema);

module.exports = Country;