'use strict';

// Jedi Name
function jediName(firstName, lastName) {
  return lastName.substring(0, 3) + firstName.substring(0, 2);
}

let getName = jediName('Bridger', 'Hammond');
console.log(getName);

//  To infinity...
function beyond(num) {
  if (num === 0) {
    return 'Staying home.';
  }
  if (num === Infinity) {
    return 'And beyond.';
  } else {
    if (num > 0) {
      return 'To infinity';
    }
    if (num < 0) {
      return 'To negative infinity.';
    }
  }
}
console.log(beyond(-5));

//  Cracking the code

//  How Many days in a month

//  Rock Paper Scissors
