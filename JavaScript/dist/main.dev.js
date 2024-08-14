"use strict";

var num1 = +prompt('Number 1');
var operator = prompt('operator');
var num2 = +prompt('Number 2');

switch (operator) {
  case '+':
    console.log(num1 + num2);
    break;

  case '-':
    console.log(num1 - num2);
    break;

  case '*':
    console.log(num1 * num2);
    break;

  case '/':
    console.log(num1 / num2);

    if (num2 === 0) {
      console.log('Division by zero is not allowed!');
    }

    break;

  case '%':
    console.log(num1 / 100 * num2);
    break;

  default:
    console.log('please add a proper operator');
    break;
}

if (isNaN(num1)) {
  console.log('Invalid input. Please enter numbers only');
}

if (isNaN(num2)) {
  console.log('Invalid input. Please enter numbers only');
} //let nums = num1 || num2;