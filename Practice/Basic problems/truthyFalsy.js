//truthy values= 2, 5, -2, 1, " ",true, "string";
//falsy values= 0, false,""

a = 2 == true  // == checks value only or anything getting compared with a number gets converted to a number
console.log(a);

b = 2 == "2" // checks value
console.log(b);

console.log(true + 1);  // boolean with any operator converts boolean to number

console.log("batch" + 2);  // anything added with string gets concatenates  

if("true")   // anything truthy is treted as true
{
    console.log("Yes")
}
else
    console.log("No")

var x=5,y=0

console.log(!x == y)   //  == compares value only
         //false == 0
           
console.log(x == !y)
        //5 ==true     // checks the value 
        // 5==1