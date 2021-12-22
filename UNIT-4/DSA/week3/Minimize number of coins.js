function minimumCoins() {
    var arr1 = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
    
}

function runProgram(input) {
  
  var newInput = input.split("\n");
  var T = Number(newInput[0]);
    for (let i = 1; i <= T;i++)
    { 
        var N = newInput[i].trim();
      minimumCoins(N)    
    
    }
   
}

if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`3
  45
  93
  29`);
   
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
