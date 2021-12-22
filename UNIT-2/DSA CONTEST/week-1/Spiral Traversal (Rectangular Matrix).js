function spiralTraversal(matrix,N,M)
{
    var count = 0;
     var left = 0;
    var right = M - 1;
    var top = 0;
    var bottom = N - 1;
    var temp = "";
    while(count<N*M)
    {
        
        for (let i = top; i <= bottom &&count<N*M;i++)       // important
        {
            temp += matrix[i][left]+" ";
            count++;
        }
        left++;

        for (let i = left; i <= right&&count<N*M;i++)
        {
            temp += matrix[bottom][i]+" ";
            count++;
        }
        bottom--;
        
        for (let i = bottom; i >= top&&count<N*M;i--)
        {
            temp += matrix[i][right]+" ";
            count++;
        }
        right--;

        for (let i =right; i >= left&&count<N*M;i--)
        {
            temp += matrix[top][i]+" ";
            count++;
        }
        top++;
    
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
        count++;
        var N = arr1[0];
        var M = arr1[1];
        var matrix = [];
        for (let j = count; j < count + N;j++)
        {
            var arr = newInput[j].trim().split(" ").map(Number);
            matrix.push(arr);
        }
        count += N;
        spiralTraversal(matrix, N, M);
        // console.log(matrix);

    }
     
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12 
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
  