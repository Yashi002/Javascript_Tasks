setTimeout(() => {console.log('Welcome - entered the web')})
let promiseTask = new Promise((resolve, reject) => {
  resolve();
})
promiseTask.then(()=> {console.log('entry in the web - completed')})

console.log('You are in the library now')
