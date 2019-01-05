const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    text: String,
    location: String
});



const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;