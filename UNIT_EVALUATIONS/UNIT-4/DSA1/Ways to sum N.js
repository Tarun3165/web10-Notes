function countWays(N)
{
  
}

function runProgram(input) {
  
  var newInput = input.split("\n");
  var T = +newInput.trim();
  for (let i = 1; i <= T;i++)
  {
    var N = +newInput[i].trim();
    countWays(N);
  }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    5
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