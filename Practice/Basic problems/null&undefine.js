var a = null;
var b;
console.log(!a);   // this gives true
console.log(!b);   // this gives true

if(!a)  
    console.log("a is null");

if(!b)   // checks for true
    console.log("b is undefined");
    
 console.log(typeof(a));   // type of null is object
 console.log(typeof(b));