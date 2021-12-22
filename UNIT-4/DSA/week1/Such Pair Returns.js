function  SuchPAirReturns(arr,N,K)
{
    var low = 0;
    var high = N - 1;
    while(low<high)
    {
        if (arr[low] + arr[high] == K)
            return 1;
        else if (arr[low] + arr[high] < K)
            low++;
        else
            high--; 
        
    }
    return -1;
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim()
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[i * 2 - 1].trim().split(" ").map(Number);
        var N = arr1[0];
        var K = arr1[1];
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        arr = arr.sort((a, b) => {
            return a - b;
        })
        
       console.log( SuchPAirReturns(arr,N,K));

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