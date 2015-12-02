var maxEntry = "Enter an integer"
$(document).ready(function() {

  //$( "body" ).append( "<p>" );
  while (maxEntry!=parseInt(maxEntry) && maxEntry % 1!=0){
    var maxEntry = prompt("Please enter an integer", maxEntry);
  }
  fizzbuzzer(maxEntry);

})

//$( "body" ).append( "</p>" );

function fizzbuzzer (max){

  for (counter = 1; counter<=max; counter++) {

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
}