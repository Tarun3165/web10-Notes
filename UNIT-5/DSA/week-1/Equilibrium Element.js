function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    for (let i = 1; i < arr.length-1;i++)
    {   
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < arr.length;j++)
        {
            if (j < i)
                leftSum += arr[j];
            else if (j > i)
                rightSum += arr[j];
            
            }
        if (leftSum == rightSum) {
            console.log(i+1);
            return;
        }
    }
    console.log(-1);
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    3 3 5 5 1
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