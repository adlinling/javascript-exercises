const add = function(a, b) {

  return a + b;
	
};

const subtract = function(a, b) {

  return Number(a) - Number(b);
	
};

const sum = function(numbers) {

  let sum = 0;

  for(num of numbers){
    sum += num;
  }

  return sum;
	
};

const multiply = function(numbers) {

  let final = 1;

  for(num of numbers){

      final *= num;
      console.log(final);
  }

  return final;
  
};



const power = function(number, exponent) {
    return number ** exponent;
};

const factorial = function(number) {
       
  if(number == 0) return 1;

  let factorial = number;

  for (let i = number - 1; i > 0; i--){
      console.log(i);
      factorial *= i;
  }

  console.log("Final: " + factorial);
  return factorial;
  
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
