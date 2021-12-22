function  rotate180(matrix,N,R)
{  
    var newMatrix = [];

    for (let j = 0; j < N; j++) {
       var arr = [];
    for (let i = N - 1; i >= 0; i--) {
         arr.push(matrix[i][j]);
    }
        newMatrix.push(arr); 
    }
    if(R==2)
    {
        R--;
        rotate180(newMatrix,N,R)
    }
    else
    {
        print(newMatrix,N); 
    } 
}

function rotation180(matrix, N)
{
    for (let i = 0; i < N;i++)
    {
        var l = 0;
        var r = N - 1;
          while(l<r)
        {
              var temp = matrix[l][i];
              matrix[l][i] = matrix[r][i];
              matrix[r][i] = temp;
              l++;
              r--;
        }
    }
  
    for (let i = 0; i < N; i++)
    {
        var l = 0;
        var r = N - 1;
        while (l < r) {
          var temp = matrix[i][l];
          matrix[i][l] = matrix[i][r];
          matrix[i][r] = temp;
          l++;
          r--;

        }
    }
  print(matrix, N);

}
function print(A,N)
{
    for (let i = 0; i < N;i++)
    {
        var res = "";
        for (let j = 0; j < N;j++)
        {
            res += A[i][j] + " "; 
        }
        console.log(res);  
    }
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    var count = 1;
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[count];
        count++;
        var matrix = [];
        for (let j = count ; j < N + count;j++)
        {
            var arr = newInput[j].trim().split(" ").map(Number);
            matrix.push(arr);
        }
        var R=2;  //rotation
        // rotate180(matrix, N, R);     // rotation of 90 two times  using extra space
        rotation180(matrix,N);     // using less space
        count += N;

    }
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3 
    1 2 3
    4 5 6
    7 8 9
    4
    1 2 3 4
    5 6 7 8
    9 0 1 2
    3 4 5 6`);
     
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
  