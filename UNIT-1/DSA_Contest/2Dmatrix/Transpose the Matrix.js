function transpose(matrix,n,m)       // this is valid for any value of n and m
{    
    for (let i = 0; i < m;i++)
    {
        var res = "";
        for (let j = 0; j < n;j++)
        {
            res += matrix[j][i] + " ";

        }
        console.log(res);
    }
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var n = arr1[0];
    var m = arr1[1];
   
    var matrix = [];
    for (let i = 1; i <= n;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        matrix.push(arr);
    }
    transpose(matrix,n,m);
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`);
     
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
  