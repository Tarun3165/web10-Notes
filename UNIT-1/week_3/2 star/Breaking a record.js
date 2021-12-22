 

function runProgram(input) {
  
    var newInput = input.split(" ");
    var N1 = Number(newInput[0]);
    var N2 = Number(newInput[1]);
    if(N1<N2)
        console.log("Broken");
    else if(N1>N2)
        console.log("Not Yet");
    else
        console.log("Wao");
    
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`264 200`);
     
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
  