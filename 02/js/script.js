
$("#recherche").click(function () {
  if ( $( "#barre" ).is( ":hidden" ) ) {
    $( "#barre" ).slideDown( "slow" );
  } else {
    $( "#barre" ).slideUp();
  }
});

$('#buton2').click( function(){
	$('#menu').css('transform', 'translateX(0)');
});

$('#close').click( function(){
	$('#menu').css('transform', 'translateX(-100%)');
});

