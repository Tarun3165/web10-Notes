function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim()
    for (let i = 1; i <= T;i++)
    {
        var N = newInput[1].trim()
        var X = newInput[2].trim()
        var Y = newInput[3].trim()
        for (let j = 1; j <= N;j++)
        {

            var arr = newInput[j + 3 * i].trim().split(" ").map(Number);
            
        }
        
    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    3
    6
    4
    3 1
    1 2
    1 2
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