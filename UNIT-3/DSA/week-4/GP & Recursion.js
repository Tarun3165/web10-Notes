 
function calculateGP(n, r) {

   if(n==0)
   {
       return 0;
   }
     return (1/r)**n+ calculateGP(n-1, r)    
 
     
 }
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[0].trim().split(" ").map(Number);
    var n = arr[0];
    var r = arr[1];
     console.log((calculateGP(n, r) + 1 ).toFixed(4));    // .to Fixed to fix in n decimal places
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3 5
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
  