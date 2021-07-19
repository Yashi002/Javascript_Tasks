var x = 100;

function hoist() {
  
  if (false) {
    var x = 200;
  }
  console.log(x);
}

hoist();
