var maximum = function (arr,N)
{
    var max = arr[0];
    for (i = 1; i <N;i++)
    {
        if (arr[i] > max)
            max = arr[i];
    }
    console.log(max);
    
}
var minimum = function (arr,N)
{
    var min = arr[0];
    for (i = 1; i <N;i++)
    {
        if (arr[i] < min)
            min = arr[i];
    }
    console.log(min);
    
    }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = Number(newInput[0]);
   
  
    var arr = newInput[1].trim().split(" ").map(Number);
      
    minimum(arr,N);
    maximum(arr,N);
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    -2 0 8 -9`);
     
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
  