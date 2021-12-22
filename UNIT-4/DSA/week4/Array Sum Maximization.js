

let largestSum = 0;

function maxSum(arr) {
  
    let obj = {};
    for (let i = 0; i < arr.length;i++)
    {
        if (obj[arr[i]] == undefined)
        obj[arr[i]] = arr[i];
    }
    for(let k in obj)
    {  
      
       let sum = 0;
       
       for (let i = 0; i < arr.length;i++)
       {
           if (arr[i] >= obj[k])
              sum=sum+obj[k]
           else
           sum =sum - (arr[i]);
              
           
       }
       if(sum>largestSum)
       largestSum=sum
    }
    console.log(largestSum);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        largestSum = 0;
        var arr = newInput[2 * i].trim().split(" ").map(Number);
        maxSum(arr)

    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3
    2 3 1
    5
    1 6 7 1 5
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