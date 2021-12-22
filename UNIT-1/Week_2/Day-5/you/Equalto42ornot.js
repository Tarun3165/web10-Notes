function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    var flag = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == 42)
            flag ++;
            
    }
    if (flag >= 1)
        console.log("Yes");
    
    else
        console.log("No");
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    3 7 42 9 8`);
     
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
  