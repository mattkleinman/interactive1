// replace images when the page loads
$('img').attr('src', 'http://i.dailymail.co.uk/i/pix/2013/11/04/article-2483175-192D3F4B00000578-419_634x644.jpg');

// replace text in the page when it loads
$('body').children().each(function () {
	// replace the '@' sign with a '$' sign
	$(this).html( $(this).html().replace(/fuck/g,'fuzz') );
	$(this).html( $(this).html().replace(/fucking/g,'fuzzy') );
	$(this).html( $(this).html().replace(/shit/g,'shoot!') );
	$(this).html( $(this).html().replace(/dick/g,'dingus') );
	$(this).html( $(this).html().replace(/faggot/g,'NO!!!') );
	$(this).html( $(this).html().replace(/Fag/g,'stop it hetero') );

});






