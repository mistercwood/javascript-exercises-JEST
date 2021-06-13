const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(arr) {
  if (arr.length < 1) {
    return 0;
  } 
  else {
    let num = 0;
	  arr.forEach(item => (num += item))
    return num;
  }
};

const multiply = function(arr) {
    let num = 1;
    arr.forEach(item => (num *= item))
    return num;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } 
  else {
    let factorial = 1;
    for (i = 1; i < num + 1; i++) {
      factorial *= i;
    }
    return factorial;
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
