const convertToCelsius = function(F) {

  let C = (Number(F) - 32)*5/9;

  if(Number.isInteger(C)){
      return Number(C);
  }else{
      return Number(C.toFixed(1));
  }

};

const convertToFahrenheit = function(C) {

  let F = Number(C)*(9/5) + 32;

  if(Number.isInteger(F)){
      return Number(F);
  }else{
      return Number(F.toFixed(1));
  }

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
