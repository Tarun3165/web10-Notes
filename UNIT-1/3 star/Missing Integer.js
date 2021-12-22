//3 star question

function runProgram(input) {
  
    var arr = input.split(" ").map(Number);
    var N = arr.length + 1;
    var sum = N * (N + 1)/2;
    var sumarr = 0;
    for (let i = 0; i < N-1;i++)
    {
        sumarr += arr[i];
    }
     console.log(sum-sumarr);
    
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4 5 1 3`);
     
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
  