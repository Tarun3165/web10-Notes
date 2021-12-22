var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];
var oddLengthElement=function(el)
{
     
    return (el.length % 2 == 1);
       
}
var sum = 0;
var sumElements=function(el)
{
   
  sum+=el.length; 
       
}

// method 1
arr.filter(oddLengthElement).forEach(sumElements);
console.log(sum);

// method 2
// var sum = function (ac, el)
// {
//   return ac + el.length;
// }  
// console.log(arr.filter(oddLengthElement).reduce(sum,0));   //  takes initial value of ac=0
                                                      

