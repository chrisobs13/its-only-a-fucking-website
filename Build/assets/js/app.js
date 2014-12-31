$(document).ready(function(){
  
	$('.tweet-button').on('click', function() {
		ga('send', 'event', 'tweet', 'click');
	});


	$( '#NSFW' ).on('tap',function() {
  	$(window).trigger('resize');
  	$( this ).toggleClass( 'censored' );
	});

});