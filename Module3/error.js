/* try,catch,finally,throw*/
/*catch- handle the error*/
/*throw-create to custom error*/
/*finally{} - execute code after trying catch*/
/**/

try{
  console.log("let's see for try");
  unicycle;
  console.log("exit try");
} catch(err) {
  console.log("Catched error:" + err.stack);
} finally {
  console.log("Hello");
}

console.log("...Let's meet again");

let json = '{"Age" : 21 }' ;

try {
  let user = JSON.parse(json);
  if (!user.name){
    throw new SyntaxError("There's no name");
  }
  console.log(user.name);
} catch(e) {
  console.log("JSON Error:" + e );
}
