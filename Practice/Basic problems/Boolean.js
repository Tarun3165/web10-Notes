var first=2.33;
var second=~~first;// using double bitwise operator we can find the integer value of the float number
console.log(second);

//or

var sec= first-first%1; // other way to find the integer value of the float number
console.log(sec);
 
//or 
var num = 3.14;
console.log(Math.ceil(num));  // for upper integer value
console.log(Math.floor(num));  // for lower integer value


//Conditional Statements: If-Else
console.log(1 == 1);  // true
console.log(1 == "1"); // true
console.log('1' == 1); // truez
console.log(0 == false); //true
console.log(0 == null);  //false
console.log(0 == undefined);//false
console.log(null == undefined); //true

//true when 
//The operands are strictly equal.
//The operands are of the same data type.
console.log(1 === 1); //true
console.log(1 === "1");//false
console.log('1' === 1);//false
console.log(0 === false); //false
console.log(0 === null);//false
console.log(0 === undefined);//false
console.log(null === undefined);//false because they are two different data types 