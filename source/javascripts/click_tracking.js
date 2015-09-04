/* Usage:
 *  <a href="/remove.html" data-event="ga" data-ga-category="Bookmarks" data-ga-action="Removed" data-ga-label="url-to-bookmark" data-ga-value="123">Remove</a>
 */
eventTracking = function() {
  $t = $('[data-event="ga"]');
  $t.click(function(e) {
    var timeout;
    var href = $(this).attr('href');
    var external = $(this).attr('target');
    if (href !== undefined && external === undefined) {
      e.preventDefault();
      timeout = setTimeout('window.location.href = "' + href + '"', 250);
    }

    var category = $(this).data('ga-category') ? $(this).data('ga-category') : 'Unspecified',
    action = $(this).data('ga-action') ? $(this).data('ga-action') : 'Unspecified',
    label = $(this).data('ga-label') ? $(this).data('ga-label') : '';
    value = $(this).data('ga-value') ? $(this).data('ga-value') : '';
    try {
      ga('send', 'event', category, action, label, value);
      //console.log("Track: " + category + " " + " " + action + " "+ label + " " + value)
    } catch (e) {
      console.log(e);
    }
  });
}

$( document ).ready(function() {
  eventTracking();
});
