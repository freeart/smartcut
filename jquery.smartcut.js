(function ($, undefined) {
	function isInRange(range, value, tolerance) {
		if (!tolerance || typeof tolerance !== 'number') {
			tolerance = [0, 0];
		}

		if (typeof tolerance === 'number') {
			tolerance = [tolerance, tolerance];
		}

		range = range.sort(function (a, b) {
			return a > b
		});
		range = [range[0] - tolerance[0], range[range.length - 1] + tolerance[1]];

		return value >= range[0] && value <= range[1];
	}

	function smartcut(text, options) {
		options = $.extend({
			threshold: 250,
			tolerance: 10
		}, options || {});

		if (options.tailLength === undefined) {
			options.tailLength = Math.min(options.threshold / 2, 50);
		}

		text || (text = '');

		if (!(text && text.length)) {
			return [];
		}

		text = $.trim(text.replace(/(\s)+/g, '$1'));

		var nearestSpace = text.indexOf(' ', options.threshold) || 0,
			nearestPeriod = text.indexOf('.', options.threshold) || 0;

		if (!nearestSpace) {
			return [text.substr(0, options.threshold), text.substr(options.threshold)];
		}

		if (text.length <= options.threshold || text.substr(nearestSpace).length <= options.tailLength) {
			return [text];
		}

		if (nearestPeriod > nearestSpace && isInRange([0, options.tailLength], nearestPeriod - nearestSpace, options.tolerance)) {
			return [text.substr(0, nearestPeriod + 1), text.substr(nearestPeriod + 1)];
		}

		return [text.substr(0, nearestSpace), text.substr(nearestSpace)];
	}

	$.fn.smartcut = function (options) {
		options = $.extend({
			moreLink: true,
			moreLinkClass: '',
			moreText: 'more',
			lessLink: true,
			lessLinkClass: '',
			lessText: 'less',
			fade: true,
			fadeDuration: 100,
			beforeAction: function () {
			},
			afterAction: function () {
			}
		}, options || {});

		return this.each(function () {
			var $this = $(this);

			if ($this.is('textarea, input, select, a') || $this.children().length) {
				return true;
			}

			var cut = smartcut($(this).text(), options);

			if (cut[1]) {
				var $cut = $('<span></span>'),
					$tail = $('<span></span>'),
					$ellipsis = $('<span>...</span>'),
					$moreLink = $('<a href="#">' + options.moreText + '</a>');

				$moreLink.addClass(options.moreLinkClass);

				$cut.html(cut[0]);

				$tail.css({ display: 'none' }).text(cut[1]);

				$moreLink.css('marginLeft', 5).mousedown(function (e) {
					e.preventDefault();
					if ($tail.is(':visible')) {
						options.fade ? $tail.add($moreLink).fadeOut(options.fadeDuration) : $tail.add($moreLink).hide();

						options.beforeAction('more');
						$tail.promise().done(function () {
							$moreLink
								.removeClass(options.lessLinkClass)
								.addClass(options.moreLinkClass)
								.text(options.moreText);

							$ellipsis.show();
							if (options.fade) {
								$moreLink.fadeIn(options.fadeDuration).promise().done(function () {
									options.afterAction('more');
								})
							} else {
								$moreLink.show();
								options.afterAction('more');
							}
						});
					}
					else {
						$ellipsis.hide();
						options.beforeAction('less');
						$moreLink
							.hide()
							.removeClass(options.moreLinkClass)
							.addClass(options.lessLinkClass)
							.text(options.lessText);

						options.fade ? $tail.fadeIn(options.fadeDuration) : $tail.show();
						if (options.lessLink) {
							if (options.fade) {
								$moreLink.fadeIn(options.fadeDuration).promise().done(function () {
									options.afterAction('less');
								})
							} else {
								$moreLink.show()
								options.afterAction('less');
							}
						}
					}
				});

				$this.empty().append($cut);

				if (cut[0][cut[0].length - 1] !== '.') {
					$this.append($ellipsis);
				}

				$this.append($tail);

				if (options.moreLink === true) {
					$this.append($moreLink);
				}
			}
		});
	};

	$.smartcut = smartcut;
})(jQuery);