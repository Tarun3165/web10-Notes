// how to prevent mutation to the original arr

var arr = [1, 4, 6, 8, 9];    // original arr

copyArr(arr);      

function copyArr(arr)    // arr as an argument
{
    var newArr = [];     
    for (let i = 0; i < arr.length;i++)
    {
        newArr.push(arr[i])                   // copy of arr created
    }
    newArr.pop();             // changed the value of copied array
    console.log(newArr); 
}

console.log(arr);    // original arr does not change
 
 