 
// arr.forEach(), arr.filter(), arr.reduce , arr.map()

var arr = [1, 4, 7, 3,8, 1, 2, 5, 9];
var arr1 = [];
 

function double(el)
{
    return el * 2;
    // console.log(el*2);
    //  arr1.push(el*2)

}

// ----------method to print without creating arr
// arr.forEach(double);
arr.map(double);
console.log(arr);   // does not change the arr
 



//----------- method to create and print arr 
// console.log(arr.map(double)); // if arr has to printed
arr.forEach(double);     
console.log(arr1);
 
function odd(el)
{
    return (el % 2 == 1);
    
}

console.log(arr.filter(odd));

function sum(ac,el)
{
    
    return ac + el;
}
// console.log(arr.reduce(sum,0));
console.log(arr.filter(odd).reduce(sum,0));
 
 
 function oddIndexElement(el,i)
 {
     return i % 2 == 1;
}
 
console.log(arr.filter(oddIndexElement));

 function oddIndex()
 {
     var temp = "";
     for (let i = 0; i < arr.length;i++)
     {    if (i % 2 == 1)
         temp+= i+" ";
     }
     return temp;
}
 
console.log(oddIndex());   