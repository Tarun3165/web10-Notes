
function runProgram(input) {
  
  var newInput = input.split("\n");
  var T = +newInput[0].trim();
  

    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    5
    aabcb
    8
    adbcdbad 
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