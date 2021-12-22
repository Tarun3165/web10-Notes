var a = 1;
var b = 2;

function sum1(a,b)
{
    a =3;
    b = 5
    var s = a + b;
    return s;
}

function sum2()
{
    a =3;
    b = 5
    var s = a + b;
    return s;
}


console.log(sum1(a, b));   // here a+b=8
console.log(a+b);  // here a+b=3

console.log(sum2());   // here a+b=8
console.log(a + b);  // here a+b=8

