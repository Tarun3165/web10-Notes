 // let has block scope that is , it is valid within the curly brackets . also let is not valid before its declaration.
 // while var has functional scope , it is valid after block as well but ends at the bracket of a function . also var gets hoisted before its declaration ,that is it gives undefined but not error.

function scope()
{ 
    { 
        console.log(var1);    // gives undefined
        // console.log(var2);   throws error
        var var1 = 10;
        let var2 = 20;
        console.log(var1, var2);   // 10 20
    }
    console.log(var1);
    // console.log(var2 );   // gives error
}
scope();
// console.log(var1);   // gives error
 


 // scope of variable
 //****1st way***
 let a=input=11;   
 if(a%2==1)
 { let a=input+1;  
     console.log(a);    //The scope of a variable declared using this keyword "let" is within  the function 
 }
 console.log(a);  //The scope of a variable declared using this keyword "let" is within  the function


 //****2nd way*****
 var b=input=11; 

 if(b%2==1)
 { var b=input+1;  
     console.log(b);    // The scope of a variable declared using this keyword  "var" is throughout the program 
 }
 console.log(b);  // The scope of a variable declared using this keyword  "var" is throughout the program
 
 
 //concatenation
 var s = "Hacker";
 var t = "Rank";
 var u = s.concat(t);  // concat() can be used directly
 console.log(s + " " + t);
console.log(u);
 

// variable declared using let will let you assign a new value after its declaration . while variable declared 

 