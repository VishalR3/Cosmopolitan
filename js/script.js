new WOW().init();



$(document).ready(function($) {
  			$('.counter').counterUp({
                delay: 10,
                time: 1000
            });
          


  			 $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('nav').addClass('nav_class');
    } else {
      $('nav').removeClass('nav_class');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('nav').addClass('nav_class');
  }

            
        });
 





