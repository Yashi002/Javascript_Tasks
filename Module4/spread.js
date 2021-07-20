const a1 = [25,30,35];

function sum(a,b,c) {
  return a + b + c ;
}

const result = sum(...a1);
console.log(result);

const a2 = [5,3, ...a1];
console.log(a2);

const result1 = sum(...a2);
console.log(result1);
