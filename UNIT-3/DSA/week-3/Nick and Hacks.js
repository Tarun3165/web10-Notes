 
 
 function check(N,x)
 {
   if (x == N)
     return true;
   if (x > N)
     return false;
     return (check(N,x*10)||check(N,x*20))
    
      
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    
    var T = +newInput[0].trim()
    for (let i = 1; i <= T;i++)
    {
      var N = +newInput[i].trim();
       
      if (check(N, 1)) 
      console.log("Yes");
      else
        console.log("No");
    }  
  
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    200
    20
    1
    1
    2
    10
    25
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
  