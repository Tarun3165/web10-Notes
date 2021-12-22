function runProgram(input) {
  
    var newInput = input.split("\n");
    
    var data = newInput[1].trim().split(" ").map(Number);

    var min=data[0];
  var max=data[0];
    for(let i=1;i<=data.length;i++)
    { if(min>data[i])
      min=data[i];
    }
console.log(min);
  
for(let i=1;i<=data.length;i++)
    { if(max<data[i])
      max=data[i];
    }
console.log(max);
  
}

     
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    -2 0 8 4`);
     
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
  