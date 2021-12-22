function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    for (let i = 0; i < arr.length;i++)
    {
        if(arr[i]==1)
        {
            console.log(i);
            return
        }
    }
    console.log(-1);
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    0 0 0 1 1
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