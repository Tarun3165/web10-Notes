function checkNonBorders(matrix,n,m)
{
    var sum = 0;
    for (let i = 0; i < n;i++)
    {
        for (let j = 0; j < m;j++)
        {
            if (i == 0 || j == 0 || i == n - 1 || j == m - 1)
                continue;
            else
                sum += matrix[i][j];

        }
    }
    console.log(sum);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    var count = 1;
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[count].trim().split(" ").map(Number);
        count++;
        var n = arr1[0];
        var m = arr1[1];
        var matrix = [];
        for (let j = count; j < n+count;j++)
        {
            var arr = newInput[j].trim().split(" ").map(Number);
            matrix.push(arr); 
        }

        checkNonBorders(matrix, n, m);
        count += n; 
         
    }
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    3 3 
    1 2 3
    4 5 6
    7 8 9`);
     
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
  