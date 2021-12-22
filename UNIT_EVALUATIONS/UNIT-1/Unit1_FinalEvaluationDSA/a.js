function checkSmallestFrequencyEven(matrix,N)
{
    var smallest = 100;     //  value does not exceed 100;
    var X = [];    // collection of left and right diagonals
    for (let i = 0; i < N; i++)     
    {
        for (let j = 0; j < N;j++)
        {   if(i==j||i+j==N-1)      // for lest diagonals
          {
            X.push(matrix[i][j]);
            if (matrix[i][j] < smallest)
            smallest = matrix[i][j];
          } 
            
        }
    }
    // console.log(X);
    var countSmallest=0
    for (let k = 0; k < X.length;k++)
    {
        if (X[k] == smallest)
            countSmallest++;

    }
    // console.log(countSmallest);

    if(countSmallest%2==0)
    console.log("yes");
    else
    console.log("no");

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    var count = 1;
    for (let i = 1; i <= T;i++)
    {
        var N = Number(newInput[count]);    // n=rows and columns
        count++;
        var matrix = [];
        for (let j = count; j < count + N;j++)
        {
            var arr = newInput[j].trim().split(" ").map(Number);
            matrix.push(arr);
        }
        checkSmallestFrequencyEven(matrix,N);
        count += N;
    }
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    3
    1 2 4
    3 1 2
    4 5 6`);
     
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
  