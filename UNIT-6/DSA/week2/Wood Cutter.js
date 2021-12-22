function wood(arr, N, K) {
    arr = arr.sort((a, b) => {
        return b - a;
    })
    for (let i = 0; i < N;i++)
    {
      
    }
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    let N = arr1[0];
    let K = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
   wood(arr,N,K)
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`4 7
      20 15 10 17
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