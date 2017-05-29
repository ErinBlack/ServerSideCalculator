$(document).ready(function(){
  console.log('jquery sourced');

  //Styling for rollover buttons

  $(".mathButtons").hover(function(){
    $(this).css("background-color", "#F19934");
    }, function(){
    $(this).css("background-color", "#F4B333");
});

  var calcType;

  $('.mathButtons').on('click', function(){
    calcType = $(this).attr('id');
  });
  $('#calculate').on('click', function() {
    //create the calculation objct to send
    var calculation = new Object();
    calculation.firstInput = $('#num1').val();
    calculation.secondInput = $('#num2').val();
    calculation.type = calcType;
    console.log('calculation object is', calculation);

    $.ajax({
      type: 'POST',
      url: '/calculation',
      data: calculation,
      success: function(response){
        console.log('the response: ',response);
        $('.mathResult').append('<p> The answer is: ' + response.answer + '</p>');
      }
    });//end ajax call
  });//end onClick

// on click for concat button
$('.calcButton').on('click', function concatNum(){
   console.log('concatNum executed');
  var concatNumber ;
  var numPressed = $(this).val();
  var numString = numPressed.toString();
  if($(".mathButtons").data('clicked', 'yes')){
    return numString;
    console.log(numString);
  } else {
    numString = numString + numPressed;
    console.log(numString);
  }
 });

// clear out the fields onClick of clear button
$('#clear').on('click', clearCalc );

});//end document.ready

// start clearCalc funciton
function clearCalc(){
  console.log('clear calc working');
  $('.mathResult').empty();
  $('.numBoxes').val('');
} //end clearCalc funciton
