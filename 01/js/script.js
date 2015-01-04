
$("#recherche").click(function () {
  if ( $( "#barre" ).is( ":hidden" ) ) {
    $( "#barre" ).slideDown( "slow" );
  } else {
    $( "#barre" ).slideUp();
  }
});