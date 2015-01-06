
$("#recherche").click(function () {
  if($("#barre").hasClass("anim"))
  {
  	$("#barre").removeClass("anim");
  }else
  {
  	$("#barre").addClass("anim");
  }
});