function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var N = arr1[0];
    var K = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
 
    for (let i = 0; i < arr.length;i++)
    {
        if(arr[i]==K)
        {
            console.log(1);
            return;
        }
    }
    console.log(-1);
    return;
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5 2
    8 4 1 9 11
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