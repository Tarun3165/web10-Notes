 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    
    var arr2 = newInput[1].trim().split(" ").map(Number);
    var totalBrickWeight = 0;
    for (let i = 0; i < arr2.length; i++)
    { 
        totalBrickWeight += arr1[1] * arr2[i];
         
    }
    console.log(totalBrickWeight );
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4 6
    1 2 3 4`);
     
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
  