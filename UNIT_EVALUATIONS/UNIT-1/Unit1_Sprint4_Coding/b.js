function sumDivisibleBy3(matrix,n,m)
{
    var sum = 0;   
    for (let i = 0; i < n;i++)
    {
        for (let j = 0; j < m;j++)
        {   if ( matrix[i][j] % 3 == 0)
            {
                sum += matrix[i][j];
            }
        }
        
    }
    console.log(sum);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);   // array of n and m

    var n = arr1[0];   // no of  rows  or arrays 
    var m = arr1[1];    // no. of columns
    
    var matrix = [];    // 2 dimensional matrix

    for (let i = 1; i <= n;i++)    
    {
        var arr = newInput[i].trim().split(" ").map(Number);   
         
        matrix.push(arr);   // creating 2 d matrix
    }
    
    // console.log(matrix);  
    sumDivisibleBy3(matrix,n,m);
}
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2 3
    3 1 8
    2 6 0`);
     
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
  