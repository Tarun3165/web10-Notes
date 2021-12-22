 
 
function countSubArrX(arr, N, K, X)        // time complexity will be O(M*X)  M is the number of subarrays of size X
{                                        // space complexity will be O(1)
  var p1 = 0;
  var p2 = X - 1;
  var countSubArr = 0;
 
  while(p2<N)
  {
    var countLessK = 0;
    for (let i = p1; i <= p2;i++)
    {
      if (arr[i] <= K)
        countLessK++;
    }
    if (countLessK == X)
      countSubArr++;
    
      p1++;
      p2++;
    }
    console.log(countSubArr);

 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
  for (let i = 1; i <= T;i++)
  { 
    var arr1 = newInput[2*i-1].trim().split(" ").map(Number);
    var N = arr1[0];
    var K = arr1[1];
    var X = arr1[2];
    var arr = newInput[2 * i].trim().split(" ").map(Number);
    
    countSubArrX(arr, N, K, X);
   
  }

   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    5 3 2
    1 3 2 5 1
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
  