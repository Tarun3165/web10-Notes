 
 
 function callBinary(N)
 {
     if (N == 0)
     return "";
   
     return `${callBinary(Math.floor(N / 2))}  ${(N % 2)}`;
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    
    var T = +newInput[0].trim() 
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[i].trim();
        console.log(callBinary(N));
    }
  
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    15
    128 
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
  