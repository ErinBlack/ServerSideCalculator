$(document).ready(function(){
  console.log('jquery sourced');

  $('.mathButtons').on('click', function(){
    $.ajax({
      type: 'POST',
      url: '/calculation'
    });//end ajax call
  });//end onClick

});//end document.ready


//calcuation function
