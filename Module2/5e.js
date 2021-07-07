function getSingleElement(arr){

    let SingleElement = [];


    for(let i of arr) {
        if(SingleElement.indexOf(i) === -1) {
            SingleElement.push(i);
        }
    }
    console.log(SingleElement);
}

const array = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];


getSingleElement(array);
