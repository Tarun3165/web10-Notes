 function traverse(matrix,N,M,q)
 {
     var temp = "";
    if(q==1)
    for (let k = 0; k < N;k++)
       {
        if(k%2==0)
            for (let i = 0; i < M; i++)
            {
             temp += matrix[k][i] + " ";
            }
        else
            for (let i = M - 1; i >= 0;i--)
            {
                temp += matrix[k][i] + " ";
            }
           
        }
        
     else
     for (let k = 0; k < N;k++)
     {
      if(k%2==1)
          for (let i = 0; i < M; i++)
          {
           temp += matrix[k][i] + " ";
          }
      else
          for (let i = M - 1; i >= 0;i--)
          {
              temp += matrix[k][i] + " ";
          }
         
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
        var q = arr1[2];
        var matrix= [];
        for (let j = count; j < N + count;j++)
        {
            var arr = newInput[j].trim().split(" ").map(Number);
            matrix.push(arr);

        }
        count += N;
        traverse(matrix, N, M, q);

    }
     
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3 3 1
    1 2 3
    4 5 6
    7 8 9
    3 3 2
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
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  