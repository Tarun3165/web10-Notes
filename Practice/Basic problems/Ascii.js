 var str = "AZaz 0123";
for (let i = 0; i < str.length;i++)
{
    var printAscii = str.charCodeAt(i);
    if(printAscii==32)
        console.log("Ascii of space is", printAscii);
    
    if(printAscii==48)
    console.log("Ascii of '0' is ",printAscii,"and Ascii of 0 is 0");    

    console.log(printAscii);   // prints ascii value of characters in a string
}

    console.log(String.fromCharCode(99));  // converts to string 
    console.log(String.fromCharCode(99-32));  // converts to string uppercase 
    console.log(String.fromCharCode(69 ));  // converts to string  
    console.log(String.fromCharCode(69 + 32));  // converts to string lowercase

    
    console.log("a".charCodeAt());  // to find ascii value 
     
    //1)******** to change from upper character to lower and viceversa
    //eg a---A  or B---b
    console.log("a".charCodeAt());  // 97
    console.log("a".charCodeAt()-32);  //65 . substraction with 32 to convert to uppercase
                                     
    
    console.log(String.fromCharCode(65)) // will give "A" 
      
    // directly we could do this(convert D----d)
    
    console.log(  String.fromCharCode(  "D".charCodeAt()+32  )  );  // will give "d"
    
    // 2)*****other easy way to convert uppercase to lowercase and viceversa
    
    console.log("e".toUpperCase()); 
    console.log("G".toLowerCase());
    console.log("MasaiSchool".toLowerCase());
    
     