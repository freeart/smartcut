/*!
 * jQuery.smartcut 1.0
 * http://tsabolov.github.com/smartcut/
 *
 * Copyright 2012, Konstantin Tsabolov
 */
(function ($, undefined) {
	var togglers = {
		generic: function () {
			this.toggle();
		},
		fade: function () {
			this.fadeToggle(100);
		}
	};

	function isInRange(range, value, tolerance) {
		if (!tolerance || typeof tolerance !== 'number') {
			tolerance = [0, 0];
		}

		if (typeof tolerance === 'number') {
			tolerance = [tolerance, tolerance];
		}

		range = range.sort(function (a, b) { return a > b });
		range = [range[0] - tolerance[0], range[range.length - 1] + tolerance[1]];

		return value >= range[0] && value <= range[1];
	}

	function smartcut(text, options) {
		options = $.extend({
			baseLength: 250,
			tolerance: 10
		}, options || {});

		if (options.tailLength === undefined) {
			options.tailLength = Math.min(options.baseLength / 2, 50);
		}

		text || (text = '');

		if (!(text && text.length)) {
			return [];
		}

		text = $.trim( text.replace(/(\s)+/g, '$1') );

		var nearestSpace = text.indexOf(' ', options.baseLength) || 0,
				nearestPeriod = text.indexOf('.', options.baseLength) || 0;

		if (!nearestSpace) {
			return [text.substr(0, options.baseLength), text.substr(options.baseLength)];
		}

		if (text.length <= options.baseLength || text.substr(nearestSpace).length <= options.tailLength) {
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
			toggleFn: 'fade',
			linkToggleFn: 'fade'
		}, options || {});

		if (typeof options.toggleFn === 'string' && $.isFunction(togglers[options.toggleFn])) {
			options.toggleFn = togglers[options.toggleFn];
		}
		else if (!$.isFunction(options.toggleFn)) {
			options.toggleFn = togglers['generic'];
		}

		if (typeof options.linkToggleFn === 'string' && $.isFunction(togglers[options.linkToggleFn])) {
			options.linkToggleFn = togglers[options.linkToggleFn];
		}
		else if (!$.isFunction(options.linkToggleFn)) {
			options.linkToggleFn = togglers['generic'];
		}

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
						$moreLink = $('<a href="javascript:;">' + options.moreText + '</a>');

				$moreLink.addClass(options.moreLinkClass);

				$cut.html(cut[0]);

				$tail.css({ display: 'none' }).text(cut[1]);

				$moreLink.css('marginLeft', 5).click(function (e) {
					e.preventDefault();

					if ($tail.is(':visible')) {
						var beforeCollapseEvent = $.Event('beforeCollapse');
						$this.trigger(beforeCollapseEvent);

						if (beforeCollapseEvent.result !== false) {
							options.toggleFn.call($tail);
							options.linkToggleFn.call($moreLink);

							$tail.promise().done(function () {
								$moreLink
									.removeClass(options.lessLinkClass)
									.addClass(options.moreLinkClass)
									.text(options.moreText);

								$ellipsis.show();
								options.linkToggleFn.call($moreLink);
							});
						}
					}
					else {
						var beforeExpandEvent = $.Event('beforeExpand');
						$this.trigger(beforeExpandEvent);

						if (beforeExpandEvent.result !== false) {
							$ellipsis.hide();
							$moreLink
								.hide()
								.removeClass(options.moreLinkClass)
								.addClass(options.lessLinkClass)
								.text(options.lessText);

							options.toggleFn.call($tail);
							if (options.lessLink) {
								$tail.promise().done(function () {
									options.linkToggleFn.call($moreLink);
								});
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