//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//listen
app.listen(3000, function(){
  console.log('server up on 3000');
});

//post calculations

app.post('/calculation', function(req, res){
console.log('post hit to /calculation and sent: ', req.body);
});
