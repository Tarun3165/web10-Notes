 
function jersy(arr, N, K)
{   for (let i = 0; i < N;i++)
    {
        for (let j = i + 1; j < N;j++)
        {
            if(arr[i]+arr[j]==K)
            {
                console.log("Yes");
                return;
            }
        }
    }
    console.log("No");
    
 }
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[i * 2 - 1].trim().split(" ").map(Number);
        var N = arr1[0];
        var K = arr1[1];
        var arr = newInput[i * 2].trim().split(" ").map(Number);
         
        jersy(arr,N,K)
       
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    5 31
    10 11 13 17 21
    5 44
    10 11 13 17 21 
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
  