function zeroToLast(arr) {
    var temp = "";
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] != 0)
        {
            temp += arr[i]+" ";
            
           }

    }
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] == 0)
        {
            temp += arr[i]+" ";
            
           }

    }
    console.log(temp);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        zeroToLast(arr);
    }
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    5
    0 1 2 3 0
    5
    0 0 1 2 3`);
     
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
  