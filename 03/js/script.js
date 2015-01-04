
$("#back").css('opacity','0');

$("#search").click(function() {

    $("#back").css('-webkit-animation' , 'change-two .5s forwards .9s');
    $("#search").css('-webkit-animation' , 'change 1s forwards');
    

});

$("#back").click(function() {

    $("#search").css({
    	'opacity' : '0',
    	'-webkit-animation' : 'change-two .5s .9s forwards'});
    $("#back").css('-webkit-animation' , 'change 1s');
    

});

