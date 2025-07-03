$(document).ready(function() {
  /**
   * Cache the body selector for performance.
   *
   * @type {jQuery}
   */
  const $body = $("body");
  
  /**
   * Initialize a default prompt message for user input.
   *
   * @type {string}
   */
  let maxEntry = "Enter an integer";

  /**
   * Continuously prompt the user until a valid integer is entered.
   */
  while (isNaN(maxEntry) || parseInt(maxEntry) % 1 !== 0) {
    maxEntry = prompt("Please enter an integer", maxEntry);
  }

  /**
   * Execute the FizzBuzz logic up to the number provided by the user.
   *
   * @param {string} maxEntry - Maximum number up to which FizzBuzz is calculated.
   */
  fizzbuzzer(maxEntry);

  /**
   * Function to append FizzBuzz result to the body based on the max number.
   *
   * @param {number} max - The upper limit for the FizzBuzz output.
   */
  function fizzbuzzer(max) {
    for (let counter = 1; counter <= max; counter++) {
      if (counter % 3 === 0 && counter % 5 !== 0) {
        $body.append("fizz<br/>");
      } else if (counter % 3 !== 0 && counter % 5 === 0) {
        $body.append("buzz<br/>");
      } else if (counter % 3 === 0 && counter % 5 === 0) {
        $body.append("fizzbuzz<br/>");
      } else {
        $body.append(`${counter}<br/>`);
      }
    }
  }
});
    for (let counter = 1; counter <= max; counter++) {
      if (counter % 3 === 0 && counter % 5 !== 0) {
        $body.append("fizz<br/>");
      } else if (counter % 3 !== 0 && counter % 5 === 0) {
        $body.append("buzz<br/>");
      } else if (counter % 3 === 0 && counter % 5 === 0) {
        $body.append("fizzbuzz<br/>");
      } else {
        $body.append(`${counter}<br/>`);
      }
    }
  }
});