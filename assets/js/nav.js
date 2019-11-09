

function sliderheight(a) {
        divHeight = $('.navbar').height();
        if(a) {
           $('.nav').css({'background-color' : '#3b90c6'});
        } else {
           $('.nav').css({'background-color' : ''});
        }
}

      $("#menushow").click(function() {
        var menu = $(".nav");
        var menubtn = $("#menushow");
        if(menu.is(":hidden")) {
          sliderheight(true);
          menu.slideDown(250);
        } else {
          menu.slideUp(250, function() {
            sliderheight(false) ;
          });
        }
      });

