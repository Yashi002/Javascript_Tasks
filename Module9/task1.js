function func(){
  return new Promise(function(resolve, reject) {
    setTimeout(() =>{
      const error = true;
      if (!error) {
        console.log('promise is resolved')
        resolve();
      }
      else {
        console.log('promise is not resolved')
        reject('sorry not fulfilled');
      }
    }, 2000);
  })
}
func().then(function() {
  console.log('Resolved');
}).catch(function(error) {
  console.log('Rejected ' + error);
})
