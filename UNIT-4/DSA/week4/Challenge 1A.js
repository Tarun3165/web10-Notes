function runProgram(input) {
  
    var newInput = input.split("\n");
    var n = +newInput[0].trim()
  
    
    var arr1 = newInput[1].trim().split(" ").map(Number);
    arr1 = arr1.sort((a, b) => {
        return b - a;
    })
    var arr2 = newInput[2].trim().split(" ").map(Number); 
    
    arr2 = arr2.sort((a, b) => {
        return b - a;
    })
    
    let totalStrength = 0;
    for (let i = 0; i < arr1.length;i++)
    {
        totalStrength += arr1[i] * arr2[i];
    }

        console.log(totalStrength);
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3 1
    4 3
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