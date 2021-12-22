var arr = [2, 4, 5, 3, 6, 8];
 
var evenIndex=function(el)
{
  return (arr.indexOf(el)%2==0) 
}

// var evenIndex=function(el,i)
// {
//   return (i%2==0)
// }

var evenValue=function(el)
{
  return (el%2==0)
}
  
 
var result = arr.filter(evenIndex).filter(evenValue);
console.log(result);
