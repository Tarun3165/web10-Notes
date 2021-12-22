function rotateAnticlock(matrix,n)
{
    for (let i = n-1; i>=0;i--)
    {
        var res = "";
        for (let j = 0; j < n;j++)
        {
            res += matrix[j][i]+" ";

        }
        console.log(res);
    }
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var n = Number(newInput[0]);   // no. of rows or columns
    var matrix = [];
    for (let i = 1; i <= n;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        matrix.push(arr);

    }
    rotateAnticlock(matrix,n);
    
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
     
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
  