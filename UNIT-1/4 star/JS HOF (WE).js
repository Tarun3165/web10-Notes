// higher order function

var items = [1, 2, 3, 4, 5, 6, 7, 8];

//problem 1
var square = function (el) {
    console.log( el**2);
}
console.log("problem 1-- ");
items.forEach(square);

 //problem 2
var double = function (el)
{
    return el * 2;
}
console.log("problem 2-- ", items.map(double));  
  

 //problem 3
var isOdd = function (el)
{
    return (el % 2 == 1);
}
console.log("problem 3-- ",items.filter(isOdd));

//problem 4
var product = function (ac,el)  // as initial value is not given it takes ac=1 (items[1]) and  el=2 (items[2]). In each   step ac=ac*el.
{
    return ac * el

}
console.log("problem 4-- ", items.reduce(product));

 // problem 5
var sum = function (ac, el)  // ac--accumulator, el--element. can write any name in place of ac and el
{ 
    return ac + el;
    }
console.log("problem 5-- ",items.filter(isOdd).reduce(sum));

// problem 6
var div3 = function (el) {
    return (el % 3 == 0);
}

var cube=function(el)
{
    return el ** 3; 
} 
 
console.log("problem 6-- ",items.filter(div3).map(cube).reduce(sum));
 