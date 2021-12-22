function rotate(N, K, arr) {
    let temp = "";
    K = K % N;
    for (let i = N-K; i < N; i++)
    {
        temp += arr[i]+" ";
    }

    for (let i = 0; i < N-K; i++)
    {
        temp += arr[i]+" ";
    }
    console.log(temp);
     
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim()
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[2 * i - 1].trim().split(" ").map(Number);
        let N = arr1[0];
        let K = arr1[1];
        var arr = newInput[2*i].trim().split(" ").map(Number); 
        rotate(N,K,arr)
    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    3 1
    1 2 3
    2 2
    1 2
    2 3
    1 2
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