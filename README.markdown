smartcut
========

description
-----------
A small utility for smart cutting of the long text. It will intelligently decides where to cut the text to keep the cut part as much consistent as possible.

usage examples
--------------
	$('.text).smartcut();

	$('.text').smartcut({
		threshold: 300
	});

	$('.text').smartcut({
		moreText: 'show more',
		lessText: 'show less'
	});
