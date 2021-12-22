 
function runProgram(input) {
    var N = Number(input);
    for (let i = 1; i <= N;i++)
    {
        var temp = "";
        for(let j = 1; j <= N-i; j++)
        {
            temp += "  ";
        }
        for(let k = 1; k <= i; k++)
        {
            temp += "* ";
        }
        console.log(temp);

    }
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4`);
     
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
  