const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  let output = 0;
	array.forEach(element => {
    output += element;
  });
  return output;
};

const multiply = function(array) {
  let output = 1;
	array.forEach(element => {
    output *= element;
  });
  return output;
};

const power = function(number, power) {
	return Math.pow(number, power);
};

const factorial = function(number) {
	let output = 1;

  for (let i = 1; i <= number; i++) {
    output *= i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
