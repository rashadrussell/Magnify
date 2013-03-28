(function () {

	var left = 0,
		top  = 0,
		sizes  = { magnify: {width: 190, height: 190}, webpage:{ width: 529, height: 283 } },
		webpage = $('#webpage'),
		offset = { left: webpage.offset().left, top: webpage.offset().top },
		magnify = $('#magnify');

		webpage.mousemove(function(e) {

			left = (e.pageX - offset.left);
			top  = (e.pageY - offset.top);

			if (left < 0 || top < 0 || left > sizes.webpage.width || top > sizes.webpage.height) {

				if(!magnify.is(':animated')) {
					webpage.trigger('mouseleave');
				}


			}

			magnify.css({
				left : left - sizes.magnify.width / 2,
				top  : top  - sizes.magnify.height / 2,
				backgroundPosition : '-' + (2.0 * left) + 'px -' + (1.50 * top) + 'px'   
			});

		}).mouseleave(function() {
			magnify.fadeOut('fast');
		}).mouseenter(function() {
			magnify.fadeIn('fast');
		});

}());





























