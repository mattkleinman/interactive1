// replace images when the page loads
$('img').attr('src', 'http://i.dailymail.co.uk/i/pix/2013/11/04/article-2483175-192D3F4B00000578-419_634x644.jpg');

// replace text in the page when it loads
$('body').children().each(function () {
	// replace the '@' sign with a '$' sign
	$(this).html( $(this).html().replace(/@/g,'$') );
});

// when you click on an image hide it using CSS
$('img').click(function() {
	$(this).addClass('hide');
});

// when you click on the page 'body' apply .gradient to it from the CSS
$('body').click(function() {
	$(this).addClass('gradient');
});




