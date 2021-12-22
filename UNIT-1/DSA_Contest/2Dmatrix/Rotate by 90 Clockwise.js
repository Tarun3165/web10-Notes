function rotateClockwise2(matrix,N)
{
    for (let i = 0; i < N;i++)
    {
        var temp = "";
        for (let j = N - 1; j >= 0;j--)
        {   
            temp += matrix[j][i] + " " ;
        }
        console.log(temp);
    }

}

function rotateClockwise1(matrix,N)
{
    var newMatrix = [];
    for (let i = 0; i < N;i++)
    {
        var arr = [];
        for (let j =0; j <N;j++)
        {
            arr.push(matrix[j][i]);
             
        }
        newMatrix.push(arr);
    } 
   
    reverseRow(newMatrix,N);
    
}

function reverseRow(newMatrix,N)
{
    var temp ;
    for (let i = 0; i < N;i++)
    {
        l = 0;
        r = N-1;
        while(l<r) 
        {
            temp = newMatrix[i][l];
            newMatrix[i][l] = newMatrix[i][r];
            newMatrix[i][r] = temp; 
          l++; r--;  
        
        }
  }
  
  print(newMatrix,N);
}

function print(matrix,N)
{
  for (let i = 0; i < N;i++)
    {
        var temp = "";
    for (let j = 0; j <N;j++)
        {   
            temp += matrix[i][j] + " " ;
        }
        console.log(temp);
    }

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var i = 0;
    var T = Number(newInput[i]);
    i++;

    while (T>0 &&i<newInput.length-1)
    {
        var matrix = [];
        var N = +newInput[i];
        
        i++;
        T--;
        
        for (let j = i; j < N+i;j++)
       {
            var arr = newInput[j].trim().split(" ").map(Number);
            matrix.push(arr);
            
        }
        rotateClockwise1(matrix,N); 
        // rotateClockwise2(matrix,N); 
        i = i + N; 
        
    }  
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8
    3
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
  