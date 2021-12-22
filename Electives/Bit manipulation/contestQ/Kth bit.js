 
 
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var t = +newInput[0].trim();
    for (let i = 1; i <= t; i++) {
        var arr = newInput[i].trim().split(" ").map(Number);
        var N = arr[0];
        var K = arr[1];
        var res = N & 2 ** K;
      if(res==0)
      console.log("No");
        else
          console.log("Yes");
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    5 2
    5 1 
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
  