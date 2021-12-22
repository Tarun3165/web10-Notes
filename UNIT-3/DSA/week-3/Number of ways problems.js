 
 
 function countWays(N)
 {
   if (N < 0)
     return 0;
   if (N == 0||N==1)
     return 1;
     return countWays(N-1)+countWays(N-2)+countWays(N-3)
     
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
     
        var N = +newInput[0].trim();  // no. of steps in stairs
        
        console.log(countWays(N));
   
  
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
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
  