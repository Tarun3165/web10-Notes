var arr = [2, 4, 5, 3, 6, 8];
 
// ******method 1 ******
// function evenIndex(arr)     
// {
//     var newarr = [];
//     for (let i = 0; i < arr.length;i++)
//     {
//         if (i % 2 == 0)
//             newarr.push(arr[i]);
//     }
//     return newarr;
    
// }


// ******method 2 ******
function evenIndex(el)
{ 
    return (arr.indexOf(el) % 2 == 0)
    
 }

function even(el)
{
    return (el % 2 == 0);
}


console.log(arr.filter(evenIndex).filter(even) );
// console.log(evenIndex(arr).filter(even) );
 
 
 
 

