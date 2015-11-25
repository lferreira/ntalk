var express = require('express');
var load = require('express-load');
var expressSession = require('express-session')
var bodyParser = require('body-parser'); 
var cokkieParser = cookieParser = require('cookie-parser');
var cfg = require('./config.json');
var cookie = cookieParser(cfg.SECRET);
var error = require('./middlewares/error');

var app = express();

app.use(cookie);
app.use(expressSession({
  secret: 'secret', 
  resave: false, 
  saveUninitialized: false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

load('models').then('controllers').then('routes').into(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));

app.use(error.notFound);
app.use(error.serverError);

app.listen(3000, function(){
  console.log("Ntalk is running");
});

module.exports = app;