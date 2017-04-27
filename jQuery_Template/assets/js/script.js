$(document).ready(function(){
	// your code here
	//alert('delete it fat');

	var n = 1;

	$('#content').click(function(){

		$('#content').html('hidden password shhh');

		$('#content').css('color', 'rgb('+n+', '+n+', '+n+')');

		alert(n);

		n = n + 10;
		//alert('delete it fat');
	});

		
	// n = 0;
	// $('body').click(function(){
	// 	n = n + 1;	
	// 	$('#pass').css('opacity', n/20);
	// });

	// $('body').mousemove(function(e){
	// 	$('#pass').css('opacity', + (e.pageY) / 10000);
	// });

});