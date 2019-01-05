const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose').set('debug', true);
const keys = require('./config/keys');
const Tweet = require('./models/tweetsDAO');
const Country = require('./models/countryDAO');

bodyParser = require('body-parser');

const app = express();

// set view engine
app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

mongoose.Promise = global.Promise;

// connect to mongodb
mongoose.connection.openUri(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
	
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/getAllTweets', (req, res) => {
    Tweet.getAllTweets().then(data=>res.json(data));
});

app.get('/getAllCountries', (req, res) => {
    Country.getAllCountries().then(data=>res.json(data));
});


app.get('/', (req, res) => {
    res.render('home', { user: req.user });
});


app.listen(process.env.PORT || 3000, () => {
    console.log('app now listening for requests on port 3030');
});
