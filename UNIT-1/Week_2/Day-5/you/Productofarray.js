function runProgram(input) {
  
    var newInput = input.split("\n");
 
    var arr = newInput[1].trim().split(" ").map(Number);
    var product = 1;
    for (let i = 0; i < arr.length;i++)
    {
        product *= arr[i];
    }
     console.log(product);
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    3 5 2 9 4`);
     
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
  