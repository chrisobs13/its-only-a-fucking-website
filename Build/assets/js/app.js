$(document).ready(function(){
  
	$('.tweet-button').on('click', function() {
		ga('send', 'event', 'tweet', 'click');
	});

});