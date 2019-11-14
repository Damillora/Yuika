
$("#menushow").click(function() {
  if($('.nav').css('display') == 'none') {
    $(".nav").show();
  } else {
    $(".nav").hide();
  }
});

$(window).resize(function() {
  var wi = $(window).width();
  if(wi >= 768) {
    $(".nav").show();
  } else {
    $(".nav").hide();
  }
});
