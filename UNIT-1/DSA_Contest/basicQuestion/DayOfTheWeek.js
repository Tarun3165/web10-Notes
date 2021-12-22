function runProgram(input) {
  
    var newInput = input.split("\n");
    var S =  newInput[0];
    var N = Number(newInput[1]);
    var index = 0;
    var arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] == S)
            index = i;
            
    }
    var day = arr[(N + index) % 7];
    console.log(day); 
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`Wednesday
    8`);
     
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
  