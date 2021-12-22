function battleOfOddAndEven(n, arr) {

}


function runProgram(input) {
  
    var newInput = input.split("\n");
    var n = +newInput[0].trim();
    var arr = newInput[1].trim().split(" ").map(Number);
    oddEven(n,arr)
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`4
      1 2 3 4
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