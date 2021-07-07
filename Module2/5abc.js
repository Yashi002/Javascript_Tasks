arr =  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
//Sum
 sum = arr.reduce((x,y)=>x+y);
console.log(sum);
//Max
 max = arr.reduce((x,y)=>x=Math.max(x,y));
console.log(max);
//Min
 min = arr.reduce((x,y)=>x=Math.min(x,y));
console.log(min);

//b & c:

prime = arr.every((x)=>{
    count =0;
    for(i=2;i<x;i++)
    {
        if(x%i==0)
        {
            count ++;
        }
    }
    if(count==0)
    {
        return true;
    }
    else{
        return false;
    }

});
if(prime){
    console.log("list is full of prime numbers");
}

//   c. Print “List has a prime no” if there is a prime no in it
prime1 = arr.some((x)=>{
    count =0;
    for(i=2;i<x;i++)
    {
        if(x%i==0)
        {
           return true;
        }
    }
   return false;

});
if(prime1){
    console.log("list has a prime number");
}
