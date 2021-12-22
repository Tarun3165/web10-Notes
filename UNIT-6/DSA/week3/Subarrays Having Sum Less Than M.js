function subarraySum(arr, N, M) {
    let count = 0;
    for (let i = 0; i < N;i++)
    {
      let sum = 0;
      for (let j = i; j < N;j++)
      {
        sum += arr[j];
        if (sum < M)
          count++;
        else
          break;
      }
  }
  console.log(count);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[2*i-1].trim().split(" ").map(Number);
        let N = arr1[0];
        let M = arr1[1];
        var arr = newInput[2*i].trim().split(" ").map(Number);
        subarraySum(arr,N,M)
    }
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      5 5
      1 5 1 3 2
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