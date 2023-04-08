const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2 ;
};

const sum = function(array) {
	let total= 0;
  array.forEach((item) =>{
    total = item + total;
  });
 /* for( a in array){
    total = array[a] + total;
  }*/
  return total;
};

const multiply = function(array) {
    x= array.length;
    total = 1;
    array.forEach((num) =>{
      total = total * num;
    }
    );
    return total;
};

const power = function() {
	
};

const factorial = function() {
	
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
