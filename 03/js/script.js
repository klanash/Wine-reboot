
$("#back").css('opacity','0');

$("#search").click(function() {

    $("#back").css('-webkit-animation' , 'change-two .2s forwards .5s');
    $("#search").css('-webkit-animation' , 'change .9s forwards');
    

});

$("#back").click(function() {

    $("#search").css({
    	'opacity' : '0',
    	'-webkit-animation' : 'change-two .2s .5s forwards'});
    $("#back").css('-webkit-animation' , 'change .9s');
    

});

