var input = [12, 24, 36]  // inputs--->[45, 0, 210], [0, 255, 0], [12, 24, 36]
var result = "";

for (let i = 0; i < input.length;i++)
{    
    var temp = "";
   result += decimalTOHex(input[i], temp); 
}

console.log(result); 

function decimalTOHex(N,temp)
{  var count = 0;
    var decimal = 0;
    var rem = 0;
    var str = "ABCDEF"; 

     while(N)    // checks for N>0
    {
        rem = N % 16;
        N = Math.floor(N / 16);
           
        if (rem >= 10) {
            //  rem = rem % 10;
             rem= str[rem%10]; 
        }
         
        temp = rem+temp;    // to add digits in reverse order
    }
    // console.log(temp);
    return temp; 
}