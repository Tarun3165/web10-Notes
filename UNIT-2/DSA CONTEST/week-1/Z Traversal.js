 
function traverseZ(matrix,N)
{
    var temp = "";
    for (let i = 0; i < N;i++)
    {
        temp += matrix[0][i]+" ";

    }
    var row = 1;
    for (let i = N-2; i >=0;i--)
    {
        temp += matrix[row][i]+" ";
        row++;

    }
    for (let i = 1; i < N;i++)
    {
        temp += matrix[N-1][i]+" ";

    }
    console.log(temp);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    var count = 1;
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[count].trim();
        count++;
        var matrix = [];
        for (j = count; j < count + N;j++)
        {
            var arr = newInput[j].trim().split(" ").map(Number);
            matrix.push(arr);
        }
        traverseZ(matrix,N);
        count += N;
    }
     
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9 
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
      runProgram(read);29033
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  