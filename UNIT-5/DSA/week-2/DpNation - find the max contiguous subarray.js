function maxContigousSubarraySum(arr) {    // Optimal T.c => O(N)
    let maxSumSoFar = Math.max();
    let maxEndingSum = 0;
  
    for (let i = 0; i < arr.length;i++)
    {
        maxEndingSum += arr[i];
        
        if (maxEndingSum > maxSumSoFar)
            maxSumSoFar = maxEndingSum;
        if (maxEndingSum < 0)
            maxEndingSum = 0;
    }
    console.log(maxSumSoFar);

        
}
function maxContigousSubarraySum1(arr) {    // brute force T.c => O(N2)
    let maxSum = Math.max();
    
    let size = 0;
    for (let j = 1; j <= arr.length;j++)
    {
        size = j;
        let p1 = 0;
        let p2 = size;
        while(p2<=arr.length)
        {
            let sum = 0;
            for (let i = p1; i < p2;i++)
            {
                sum += arr[i];
            }
            if (sum > maxSum)
            maxSum = sum;
            p1 =p1+1 ;
            p2 = p2 + 1;
        }
    }
    console.log(maxSum);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        let arr = newInput[i * 2].trim().split(" ").map(Number);
        maxContigousSubarraySum(arr)
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`3
      3
      1 2 3
      4
      -1 -1 0 1
      3
      2 -1 2
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