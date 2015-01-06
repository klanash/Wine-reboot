
$("#recherche").click(function () {
  if($("#barre").hasClass("anim"))
  {
  	$("#barre").removeClass("anim");
  }else
  {
  	$("#barre").addClass("anim");
  }
});

$('#buton2').click( function(){
	$('#menu').css('transform', 'translateX(0)');
});

$('#close').click( function(){
	$('#menu').css('transform', 'translateX(-100%)');
});

