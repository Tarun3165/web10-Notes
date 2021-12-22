 
 
 function square(N)
 {
     var sum = 0;
     for (let i = 1; i <= N;i++)
     {
         sum += N;
     }
     console.log(sum);
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var t = +newInput[0].trim();
    for (let i = 1; i <= t; i++) {
        var N = +newInput[i].trim();
        square(N);
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    5
    6 
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
  