
$("#buton1").click(function(){

	$("#bouton1Content").css('transform','translateX(0)');
	$("#bouton2Content").css('transform','translateX(100%)');
	$("#buton1").css('border-bottom', '3px solid #fff');
	$("#buton2").css('border-bottom', 'none');

});


$("#buton2").click(function(){

	$("#bouton1Content").css('transform','translateX(-100%)');
	$("#bouton2Content").css('transform','translateX(0)');
	$("#buton1").css('border-bottom', 'none');
	$("#buton2").css('border-bottom', '3px solid #fff');
});


