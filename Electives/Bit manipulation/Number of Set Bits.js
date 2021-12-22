 
 function countSetBits(N)
 {
     var count = 0;
     var rem = 0;
     while(N)
     {
         rem = N % 2;
         if (rem & 1 == 1)
             count++;
         N = N / 2;

     }
      console.log(count);
 }
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[i].trim();
        countSetBits(N);

    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    1
    3
    7
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
  