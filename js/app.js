$(document).ready(function() {

$( "body" ).append( "<p>" );

for (counter = 1; counter<=100; counter++) {
  if (!(counter % 3) && (counter % 5)) {
    $( "body" ).append( "fizz<br/>" );
    }
  else if ((counter % 3) && !(counter % 5)) {
    $( "body" ).append( "buzz<br/>" );
    }
  else if (!(counter % 3) && !(counter % 5)) {
    $( "body" ).append( "fizzbuzz<br/>" );
    }
  else {
    $( "body" ).append( counter+"<br/>" );
    }
}   
$( "body" ).append( "</p>" );

})
