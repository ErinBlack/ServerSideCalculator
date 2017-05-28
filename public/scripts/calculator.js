$(document).ready(function(){
  console.log('jquery sourced');
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

});//end document.ready


//calcuation object function
