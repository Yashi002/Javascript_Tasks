
var arr = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
var sArr =[];
for(var i=0;i<arr.length;i++)
{
    if(!sArr.includes(arr[i]))
    {
        sArr.push(arr[i]);
    }
}

console.log(sArr);
