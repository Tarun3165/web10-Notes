
var ans = -1;
 function  squareRootBinarySearch(low,high,K)
 {
     if (low > high)
     {   
         return;
     }
     let mid = ((low + high)/ 2) |0
     if(mid*mid==K)
     {  ans=mid
         return 1;
     }
     else if (mid * mid < K)
     {
       ans = mid;
        squareRootBinarySearch( mid + 1, high, K);
     } 
     else
     squareRootBinarySearch( low, mid-1, K);
 
 }
     

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[i].trim();
      squareRootBinarySearch(0, N, N)
      console.log(ans);
    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    4
    8
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