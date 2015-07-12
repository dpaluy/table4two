//= require_tree .

$(function() {
  // fly-in animation content
  $('.animated-content').appear();
    $("html, body").trigger('scroll');
    $(document.body).on('appear', '.animated-content', function (e, $affected) {
      $(this).removeClass('animated-content').addClass('appeared');
    });
});
