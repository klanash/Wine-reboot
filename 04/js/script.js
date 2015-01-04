


$(function() {			
	//Enable swiping...
	$("#bouton").swipe( {
		//Generic swipe handler for all directions
		swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
			$('#supprimer').css('transform' , 'translateX(30px)');
			$('#bouton').css('transform' , 'translateX(-30px)');	
		},
		swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
			$('#supprimer').css('transform' , 'translateX(150px)');
			$('#bouton').css('transform' , 'translateX(0px)');	
		},
		//Default is 75px, set to 0 for demo so any distance triggers swipe
		threshold:0
	});

	$('#supprimer').click(function(){
        $(this).closest('#bouton').remove();

    });

});