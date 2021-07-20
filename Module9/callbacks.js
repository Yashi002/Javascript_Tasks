let add = function(a,b) {
  return a+b
};
let multiply = function(a,b) {
  return a*b
};

let calc = function (num1,num2, callback) {
  return callback(num1, num2);
};

console.log(calc(5,9, add));
console.log(calc(5,9, multiply));















//general check for callback func
//let x = function() {
//  console.log("Whats up with you?");};

//let y = function(callback) {
//  console.log("catch up soon");
//  callback();}

//y(x);
