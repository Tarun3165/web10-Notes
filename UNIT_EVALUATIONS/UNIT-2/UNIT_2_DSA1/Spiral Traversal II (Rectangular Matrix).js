 

function traverse(matrix, N, M)
{
  var top = 0;
  var bottom = N - 1;
  var left = 0;
  var right = M - 1;
  var count = 0;
  var temp = "";

  while(count<N*M)
  {
    for (let i = bottom; i >= top&&count<N*M;i--)
    {
      temp += matrix[i][left]+" ";
      count++; 
    }
    left++;

    for (let i = left; i <= right&&count<N*M;i++)
    {
      temp += matrix[top][i]+" ";
      count++;
    }
    top++;

    for (let i = top; i <= bottom&&count<N*M;i++)
    {
      temp += matrix[i][right] + " ";
      count++;
    }
    right--;

    for (let i = right; i >= left&&count<N*M;i--)
    {
      temp += matrix[bottom][i] + " ";
      count++;
    }
    bottom--;

   }
   console.log(temp);
   
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    var count = 1;
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[count].trim().split(" ").map(Number);
        var N = arr1[0];
        var M = arr1[1];
        count++;
        var matrix = [];
        for (let j = count; j < N + count;j++)
        {
            var arr = newInput[j].trim().split(" ").map(Number);
            matrix.push(arr);
        }
        traverse(matrix,N,M);
      
        count += N;
    }
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    5 6
    1 7 9 8 7 2
    4 9 7 2 8 5
    3 5 6 2 7 9
    7 4 1 1 8 8
    5 3 4 6 7 4
    2 6
    7 4 1 1 8 8
    5 3 4 6 7 4 
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
  