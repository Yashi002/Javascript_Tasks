
arr = [
    {
        "id":1,
        "name":"Amit Kumar",
        "age":25
    },
    {
        "id":2,
        "name":"Rahul Dixit",
        "age":20
    },
    {
        "id":3,
        "name":"Ravi Joshi",
        "age":55
    },
    {
        "id":4,
        "name":"Rohit Verma",
        "age":37
    },
    {
        "id":5,
        "name":"Ajay Jain",
        "age":17
    }


];

//   Printing id n name of the youngest n oldest person

youngest = arr.reduce((x,y)=> Math.min(x,y.age), arr[0].age);
console.log(youngest);

oldest = arr.reduce((x,y)=> Math.max(x,y.age), arr[0].age);
console.log(oldest);

//   b. Creating another list having id and name of all the person above 18 years

above_18 = arr.filter(x => x.age > 18);
above_18.forEach(x => delete x.age);
console.log(above_18);

//   Finding the average age

sumOfAges = arr.reduce((x,y) => x += y.age, arr[0].age);
avg_age = sumOfAges/arr.length;
console.log(avg_age);

//  Creating 2 list with names starting with only ‘A’ and ‘R’ respectively

arr1 = arr.filter(x => x.name[0]==="A");
console.log(arr1);

arr2 = arr.filter(x => x.name[0]==="R");
console.log(arr2);
