var N = 1001001;   //   input --->10101, 1001001,10001
 
var sum = 0;
var rem = 0;
var count = 0;

while (N) {   // checks for N>0
      
    rem = N % 10;
    sum += rem * 2 ** count;
    count++;
    N = Math.floor(N / 10);
}
    
   console.log(sum); // gives the decimal equivalent of Binary Number
 

 
