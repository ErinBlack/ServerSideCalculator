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
  var calc = executeCalculation(req.body.firstInput, req.body.secondInput, req.body.type);
  //start the function to calculate the math
  function executeCalculation(num1, num2, type){
    var parsedNum1 = parseInt(num1);
    var parsedNum2 = parseInt(num2);

    var computeCalculation = finalCalc(parsedNum1, parsedNum2, type);
    //final calculation function
    function finalCalc(num1, num2, calcType){
      console.log('finalCal calctype', calcType);
      var type = calcType;
      //switch statement to determine which calculation to make
      switch(type){
        case 'add':
        computeCalculation = num1 + num2 ;
        break;
        case 'subtract':
        computeCalculation = num1 - num2;
        break;
        case 'multiply':
        computeCalculation = num1 * num2;
        break;
        case 'divide':
        computeCalculation = num1 / num2;
        break;
      }// end switch statement
      return computeCalculation;
    }// end finalCalc function

    console.log(computeCalculation);
    return computeCalculation;
  }//end executeCalculation

  var result = new Object();
  result.answer = calc;
  //send the result
  res.send('' + result + '');

}); //end app.post
