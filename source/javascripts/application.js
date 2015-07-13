//= require_tree .

$(function() {
  // fly-in animation content
  $('.animated-content').appear();
    $("html, body").trigger('scroll');
    $(document.body).on('appear', '.animated-content', function (e, $affected) {
      $(this).removeClass('animated-content').addClass('appeared');
    });

    // mobile nav - open/close
    $('#menu-open').click(function () {
        $('body').addClass('mobile-nav-opened hide-overflowY');
    });

    $('#menu-close').click(function () {
        $('body').removeClass('mobile-nav-opened hide-overflowY');
    });
});
