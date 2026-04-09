(function ($) {
  "use strict";
  jQuery(function () {
    jQuery("#defaultCountdown").countdown({
      until: new Date(2026, 10 - 1, 29, 18),
    }); //  year, month, date, hour
  });
})(jQuery);
