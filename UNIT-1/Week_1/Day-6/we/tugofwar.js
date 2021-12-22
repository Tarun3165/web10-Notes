var a = "Masai"; // string 
var b = 21331;  //number
var c = true;  //boolean

console.log(typeof a == typeof Number(b));// false
           //string      //typeof 21331
          //string      //number
console.log(typeof Number(a) == typeof Number(b));//true
        //  typeof Nan            //typeof 21331
       //number                  //number
console.log(typeof String(c) == String(""));//false
            //typeof "true"       // ""
           //string              //""


console.log(typeof typeof Number(b)); // string
                         //21331
                    //number
             //string    


                            
 