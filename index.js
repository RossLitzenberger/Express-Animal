var express = require('express');
var app = express();

app.get('/', function (req,res) {
  res.send('Hello world');
  // res.json({hello: 'hi'})
});

var server = app.listen(3000, function (){
  console.log('server running at localhost:3000');
});
