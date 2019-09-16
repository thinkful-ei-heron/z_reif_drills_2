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
// func takes in sentence
// split sentence
// check first letter
// a,b,c,d = 2,3,4,5
// get letter at position, if empty = space
function decode(string) {
  // split input string into words
  let words = string.split(' ');
  //  create empty string to store return characters
  let returnString = '';

  //  loop through words
  for (let i = 0; i < words.length; i++) {
    // check if current 0 character == 'a'/'b'/'c'/'d'
    if (words[i][0] === 'a') {
      returnString += words[i][1];
    } else if (words[i][0] === 'b') {
      returnString += words[i][2];
    } else if (words[i][0] === 'c') {
      returnString += words[i][3];
    } else if (words[i][0] === 'd') {
      returnString += words[i][4];
    } else {
      // else return a space
      returnString += ' ';
    }
  }
  console.log(returnString);
}

decode('craft block argon meter bells brown croon droop');

//  How Many days in a month
// function w/ 2 arguments month ('') and leapYear(boolean)
// use switch statement to return sentence showing how many days in that month

function daysInMonth(month, leapYear) {
  switch (new Date().getMonth()) {
    case 1:
  }
   

  }
}


//  Rock Paper Scissors
// r=1
// p=2
// s=3
function RPS(playerInput) {
  const randomNo = Math.floor(Math.random() * 3) + 1;

  if (randomNo === playerInput) {
    console.log('tie');
  } else if (randomNo === 1 && playerInput === 2) {
    console.log('player wins');
  } else if (randomNo === 1 && playerInput === 3) {
    console.log('computer wins');
  } else if (randomNo === 2 && playerInput === 1) {
    console.log('computer wins');
  } else if (randomNo === 2 && playerInput === 3) {
    console.log('player wins');
  } else if (randomNo === 3 && playerInput === 1) {
    console.log('player wins');
  } else if (randomNo === 3 && playerInput === 2) {
    console.log('computer wins');
  }
}
console.log(RPS(1));
