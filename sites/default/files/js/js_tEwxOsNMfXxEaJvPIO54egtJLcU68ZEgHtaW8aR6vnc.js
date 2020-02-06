/**
 * @file
 * Attaches the behaviors for the Juicebox module.
 */

(function ($, Drupal) {
  Drupal.behaviors.juicebox = {
    attach: function (context, settings) {
      if (typeof settings['juicebox'] !== 'undefined') {
        var galleries = settings['juicebox'];
        // Loop-through galleries that were added during this request.
        for (var key in galleries) {
          if (galleries.hasOwnProperty(key) && document.getElementById(key)) {
            // Instantiate each new gallery via the library. Take a copy to be
            // safe as we will delete the original settings reference after.
            var newGallery = $.extend({}, galleries[key]);
            new juicebox(newGallery);
            // We only want to hold on to the settings for this gallery long
            // enough to pass it on as a proper Juicebox object. In fact,
            // holding on longer can cause problems on sequential AJAX updates
            // of the same gallery, so it's probably best to delete it.
            delete galleries[key];
          }
        }
      }
    }
  };
})(jQuery, Drupal);;
jQuery(document).ready(function($) {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $(".to-top").addClass("show");
    } else {
      $(".to-top").removeClass("show");
    }
  });

  $(".to-top").click(function() {
    $("body,html").animate({scrollTop:0},800);
  });
});
;
