function sumSubarr(arr,N, K) {
  let prefixSum = [];
  
  let sum = 0;
  let set = new Set;
  for (let i = 0; i < arr.length;i++)
  {
    sum += arr[i];
    prefixSum[i] = sum;
    set.add(prefixSum[i])
    if (set.has(prefixSum[i] - K))  //order 1 operation
    {
      console.log("Yes");
      return;
    }
      
    if(arr[i]==K)
    {
      console.log("Yes");
      return;
    }
    if(sum==K)
    {
      console.log("Yes");
      return;
    }
}
  console.log("No");
  
}


function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[2 * i - 1].trim().split(" ").map(Number);
        let N = arr1[0];
        let K = arr1[1];
        var arr = newInput[2 * i ].trim().split(" ").map(Number);
        sumSubarr(arr,N,K)

    }
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`3
      5 3
      1 2 1 3 4
      4 5
      1 2 1 3
      3 2
      1 2 1
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