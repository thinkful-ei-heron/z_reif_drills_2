'use strict';

function jediName(firstName, lastName) {
  return(lastName.substring(0,3) + firstName.substring(0,2));
}

let getName = jediName('Bridger', 'Hammond');
console.log(getName);