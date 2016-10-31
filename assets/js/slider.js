(function($) {

	$(document).ready(function () {
	    var img_array = [1, 2, 3, 4, 5, 6],
	        newIndex = 0,
	        index = 0,
	        interval = 7500;

	    (function changeBg() {
	        index = (index + 1) % img_array.length;

	        $('.slider').css('backgroundImage', function () {
				$('.slider').css('opacity', 0.1);

				var appear = setInterval(function() {
					var opacity = $('.slider').css('opacity');

					if (opacity < 1) {
						$('.slider').css('opacity', parseFloat(opacity) + 0.02);
					} else {
						clearInterval(appear);
					}
				}, 20)

	            return 'url(/assets/images/slider/' + img_array[index] + '.jpg)';
	        });

	        setTimeout(changeBg, interval);

	    })();
	});

})(jQuery);
