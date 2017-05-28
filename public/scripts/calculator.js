$(document).ready(function(){
  console.log('jquery sourced');

  $('#calculate').on('click', calculation );
  // {
  //   $.ajax({
  //     type: 'POST',
  //     url: '/calculation'
  //   });//end ajax call
  // });//end onClick

});//end document.ready


//calcuation object function
function calculation (){
  var calculation = new Object();
  calculation.firstInput = $('#num1').val();
  calculation.secondInput = $('#num2').val();
  calculation.calcType = $('.mathButtons').attr('value');

  console.log('calculation object is', calculation);

}
