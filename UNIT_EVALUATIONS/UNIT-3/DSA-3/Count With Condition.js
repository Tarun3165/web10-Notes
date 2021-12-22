var count = 0;
function SumofSubset(S, newArr, X, low, high)
{  
  if (low <= high && S.length != 0)
  { 
    var y = S.split(" ").map(Number);
     var sum = 0;
     for (let j = 0; j < y.length;j++)
     {
         sum += y[j];
     }
     if (sum == X)
         count++; 
  
  }
    
    for (let i = low; i <= high;i++)
    {
      SumofSubset(S+" "+newArr[i],newArr,X,i+1,high)

    }
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[0].trim().split(" ").map(Number);
    var N = arr[0];
    var X = arr[1];
    var newArr = newInput[1].trim().split(" ").map(Number);
   
    SumofSubset("", newArr, X, 0, N);
    console.log(count);
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`7 15
    1 2 3 5 6 8 10
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