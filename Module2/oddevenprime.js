arr =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for even
even = arr.filter(x => x%2===0);
console.log(even);
// for odd
odd = arr.filter(y => y%2 !==0);
console.log(odd);
// for prime
prime = arr.filter(function(z){
    count =0;
    for(let i=2;i<z;i++)
    {
        if(z%i===0)
        {
            count++;
        }
    }
    if(count===0)
    {
        return true;
    }
});
