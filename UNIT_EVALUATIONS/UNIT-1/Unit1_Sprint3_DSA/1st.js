function runProgram(input) {
  
    var newInput = input.split("\n");
    var A = Number(newInput[0]);
    var B = Number(newInput[1]);
    var C = Number(newInput[2]);
    var N = Number(newInput[3]);
    if(A>N)
        console.log("Person A");
    else if(B>N)
    console.log("Person B");
    else if(C>N)
        console.log("Person C");
    else
        console.log("Not found");
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`30000
    12000
    43000
    31000`);
     
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
  