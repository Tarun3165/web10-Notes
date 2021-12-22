 
// using 2 pointer aproach 
function compareNumbers(a, b)   
{
  return a-b;
}

function checkPairs1(arr, N, K)
{
  arr = arr.sort(compareNumbers);
   
  var left = 0;
  var right = N - 1;
  var sum = 0; 
  
  while(left<right)
  {  
    sum = arr[left] + arr[right];
    if (sum == K) {
      console.log(1);
      return;
    }
    else if (sum > K)
      right--;
    else
      left++;
    
  } 
  console.log("-1");  
}


function checkPairs(arr, N, K)
{
   for (let i = 0; i < N;i++)
    {
      for (let j = i + 1; j <N;j++)
      {   
        if(arr[i]+arr[j]==K)
        {  console.log(1);
          return;
        }  
      } 
    }
    console.log(-1);
  }

function runProgram(input) {
  
  var newInput = input.split("\n");
  var T = +newInput[0].trim();
  for (let i = 1; i <=T;i++)
  {
    
    var arr1 = newInput[i*2-1].trim().split(" ").map(Number);
    var N = arr1[0];
    var K = arr1[1];
    var arr = newInput[i*2].trim().split(" ").map(Number);
    checkPairs1(arr,N,K);
  }
   
     
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    5 2
    3 4 0 2 7  
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

  