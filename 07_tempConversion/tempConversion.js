const convertToCelsius = function(x) {

 let y = ((x - 32) * 5 /9).toFixed(1);
 
   return parseFloat(y);
};

const convertToFahrenheit = function(k) {
  let j = ((k * 9/5 )+ 32).toFixed(1);
  return parseFloat(j);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
