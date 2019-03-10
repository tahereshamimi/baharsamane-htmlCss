$(document).ready(function () {
  $('.movie-img').css('height', $('.movie-img').width() * 1.5);
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
    loop: true,
    margin: 10,
    nav: true,
    items:1,
    dots:false
  })
});

