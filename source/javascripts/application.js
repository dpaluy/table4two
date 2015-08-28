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

//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
function autoPlayYouTubeModal() {
  var trigger = $("body").find('[data-toggle="modal"]');
  trigger.click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-theVideo"),
    videoSRCauto = videoSRC + "?autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
    $('.modal').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
}

$( document ).ready(function() {
  autoPlayYouTubeModal();
});

