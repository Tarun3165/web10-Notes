var arr = ["apple", "windows", "ubuntu"];
 
 
var newarr=function(el)
{
    return (el[0]);
}
 

console.log(arr.map(newarr));

 // or

// for (let i = 0; i < arr.length; i++)
// {
    
//     console.log(arr[i][0]);
// }