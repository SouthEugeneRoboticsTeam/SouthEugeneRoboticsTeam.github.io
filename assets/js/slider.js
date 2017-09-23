(function($) {

    $(document).ready(function() {
        var img_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            newIndex = 0,
            index = 0,
            interval = 7500;

        (function changeBg() {
            index = (index + 1) % img_array.length;

            $('.slider').css('opacity', .9);
            var switchDir = false;
            var itsTime = false;

            var appear = setInterval(function() {
                var opacity = $('.slider').css('opacity');

                if (opacity <= 0.05) {
                    switchDir = true;
					itsTime = true;
                }
                if (opacity >= 1) {

                    clearInterval(appear);
                }

                if (switchDir) {
                    $('.slider').css('opacity', parseFloat(opacity) + 0.02);
                } else {
                    $('.slider').css('opacity', parseFloat(opacity) - 0.02);
                }

				if (itsTime) {
					$('.slider').css('backgroundImage', 'url(/assets/images/slider/' + img_array[index] + '.jpg)');
				}
            }, 20);

            setTimeout(changeBg, interval);

        })();
    });

})(jQuery);
