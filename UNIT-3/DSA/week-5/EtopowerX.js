 
 
 function calculateEpowX(x,n)
 {
     if (n < 0)
         return 0;
     return (x ** n) / fact(n) + calculateEpowX(x, n - 1);
 }

 function fact(n)
 {
     if (n == 0)
         return 1;
     return n*fact(n-1)
 }
function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[0].trim().split(" ").map(Number);
    var x = arr[0];
    var n = arr[1];

  
    console.log(  calculateEpowX(x, n).toFixed(4));     // .toFixed() to print 4 decimal places
     
   
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4 2 
    `);
     
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  