function search(arr,x,N)
{
    var low=0;
    var high = N-1;
    while(low<=high)
    {
        var mid=Math.floor((low+high)/2)
        if (arr[mid] == x)
            return "YES"
        else if (arr[mid] < x)
            low = mid + 1;
        else
            high = mid - 1;
        
    }
    return "NO"


}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var N = arr1[0];
    var Q = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
     arr = arr.sort((a, b) => {
        return a - b;
    })
    for (let i = 2; i < Q + 2;i++)
    {
        var flag = 0;
        var x = +newInput[i].trim()
       console.log( search(arr,x,N));
    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100
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