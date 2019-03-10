$(document).ready(function () {
  $('.movie-img').css('height', $('.movie-img').width() * 1.5);
  $("#movieFilter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".movies .movie").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});