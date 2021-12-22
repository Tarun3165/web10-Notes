 
 
 function calculateLog(N)
 {
   if (N == 1)
     return 0;
  return Math.log(N) +calculateLog(N-1)      // Math.log(N) to calculate log of N
 }

  
function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
  
    console.log(calculateLog(N).toFixed(4));
   
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
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
  