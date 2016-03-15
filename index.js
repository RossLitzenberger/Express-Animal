var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var cats = require('./cats.js')(app);

var server = app.listen(3000, function (){
  console.log('server running at localhost:3000');
});
