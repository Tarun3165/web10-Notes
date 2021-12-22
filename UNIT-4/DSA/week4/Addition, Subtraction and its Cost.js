let minimumCost = 10000000;

function solve(val, K, arr,)
{ 
  let cost = [];
  let sum = 0;
  for (let i = 0; i < arr.length;i++)
  {
    sum= 0;
    if (arr[i] > val)
      sum = 5 * (arr[i] - val)
      else
      sum = 3 * (val- arr[i])
      
    cost[i] = sum;
  }
  cost = cost.sort((a, b) => {
    return a - b;
  })
  
  sum = 0;
  for (let i = 0; i < K;i++)
  {
    sum += cost[i];
    
  }
  if (sum < minimumCost)
    minimumCost = sum;
}

function makeKeqauls(N, K, arr)
{  
  let obj = {};
  for (let i = 0; i < arr.length; i++)
  {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 1
    }
    else
    obj[arr[i]] +=1
  }
  
  for(key in obj)
  {
    solve(key,K,arr)
  }
  
  console.log(minimumCost);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim()
    for (let i = 1; i <= T;i++)
    {   minimumCost = 10000000;
        var arr1 = newInput[2 * i - 1].trim().split(" ").map(Number);
        var N = arr1[0];
        var K = arr1[1];
        var arr = newInput[2 * i].trim().split(" ").map(Number);
        makeKeqauls(N,K,arr)

    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    11 6
   20 47 6 26 54 37 66 76 10 89 41 
    
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