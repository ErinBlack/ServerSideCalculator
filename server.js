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
  function executeCalculation(num1, num2, calcType){
    var parsedNum1 = parseInt(num1);
    var parsedNum2 = parseInt(num2);
    var computeCalculation = parsedNum1 + parsedNum2;
    console.log(computeCalculation);
    return computeCalculation;
  }//end executeCalculation
  var calc = executeCalculation(req.body.firstInput, req.body.secondInput, req.body.calcType);
  var result = new Object();
  result.answer = calc;
  //send the result
  res.send(result);

}); //end app.post
