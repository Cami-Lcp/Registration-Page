$('.loginbtn').click(function(){
  $('.login').show();
  $('.SignUp').hide();

  $('.loginbtn').css({'border-bottom' : '2px solid #a15852'});
  $('.signupbtn').css({'border-style' : 'none'});
});

$('.signupbtn').click(function(){
    $('.login').hide();
    $('.SignUp').show();
  
    $('.signupbtn').css({'border-bottom' : '2px solid #a15852'});
    $('.loginbtn').css({'border-style' : 'none'}); 
});