// 3star question

function swastika(A, n, m)
{
    var sum1 = 0;
    var sum2 = 0;
    for (let i = 0; i < n;i++)
    {
        for (let j = 0; j < m;j++)
        {
            if (i == 0 && j == 0)
                sum1 += A[i][j];
            
            if (i == 1)
                sum1 += A[i][j];
            
            if(i==n-1&&j==m-1)
                sum1 += A[i][j];
            
            // or directly

            if (i == 0 && j == m - 1 || i == 1 || i == n - 1 && j == 0)
                sum2 += A[i][j];
        }
    }
     console.log(Math.abs(sum1-sum2));   // Math.abs() returns the absolute value

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var n = arr1[0];
    var m = arr1[1];
    
    var twoDArr = [];
    for (let i = 1; i <= n;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        twoDArr.push(arr);
    }
    swastika(twoDArr,n,m);
     
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3 5
    1 2 3 4 5
    6 7 8 9 10
    11 12 13 14 15`);
     
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
  