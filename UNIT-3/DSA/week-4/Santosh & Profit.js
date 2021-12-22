 
 function fun(N)
 {
     if (N == 0)
         return 1;
     else if (N < 0)           //  also for odd numbers this case will come 
         return 0;
     return fun(N - 4) + fun(N - 8);        
 }
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[i].trim();
        console.log(fun(N));    // for N =0 , one way has to be counted as he cannot deliver
    }    
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    12 
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
  