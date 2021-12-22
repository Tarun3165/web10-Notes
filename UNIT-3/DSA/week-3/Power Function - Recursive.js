 
 
 function calPower(a,b)
 {
     if (b == 0)
         return 1;
     return a * calPower(a, b - 1);
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[0].trim().split(" ").map(Number);
    var a = arr[0];
    var b = arr[1];
  
   console.log( calPower(a,b));
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2 4 
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
  