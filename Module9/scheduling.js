//setTimeout

var timeoutID = setTimeout(meetsoon, 2500);
console.log('Hello');

clearTimeout(timeoutID);

function meetsoon() {
  console.log('lets meet soon');
}

//setinterval

var count = 0
var intId = setInterval(counter, 1000);

function counter() {
  console.log(++count);
}
