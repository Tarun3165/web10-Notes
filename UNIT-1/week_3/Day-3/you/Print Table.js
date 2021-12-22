function printTable(N)
{
    var result = "";
    for (let i = 1; i <= 10;i++)
    {
        if (i == 1)
            result = N;
        else
        result += " "+N*i;
    }
    console.log(result);
    
    }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    for (let i = 1; i <= T;i++)
    {
        var N = Number(newInput[i]);
        printTable(N);
    }
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    2
    3`);
     
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
  