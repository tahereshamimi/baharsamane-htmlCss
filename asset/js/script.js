$(document).ready(function () {

  $(window).on('resize',function(){
    $('.movie-img').css('height',$('.movie-img').width()*1.5);
  })
  

  $("#movieFilter").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".movies .movie").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $("#movieFilter").click(function () {
    $('html,body').animate({
      scrollTop: $("#movieFilter").offset().top
    },
      'slow');
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1,
    dots:false,
    rtl: true,
    singleItem: true
  });



  // overflow
  $(".overflowing").hoverForMore({
    speed: 60.0,		// Measured in pixels-per-second
    loop: true,		// Scroll to the end and stop, or loop continuously?
    gap: 20,		// When looping, insert this many pixels of blank space
    target: false,		// Hover on this CSS selector instead of the text line itself
    removeTitle: true,	// By default, remove the title attribute, as a tooltip is redundant
    snapback: true,		// Animate when de-activating, as opposed to instantly reverting
    addStyles: true,	// Auto-add CSS; leave this on unless you need to override default styles
    alwaysOn: false,	// If you're insane, you can turn this into a <marquee> tag. (Please don't.)
  
    // In case you want to alter the events which activate and de-activate the effect:
    startEvent: "mouseenter",
    stopEvent: "mouseleave"
  });
});

