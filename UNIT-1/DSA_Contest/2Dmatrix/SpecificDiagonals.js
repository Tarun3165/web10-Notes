function diagonal(matrix,K,R,C)
{  
    for (let i = 0; i < R;i++)
    {
        for (let j = 0; j < C;j++)
        {
            if(matrix[i][j]==K)
            {
              printdiagonalsLeftToRight(i, j,R,C,matrix );
              printdiagonalsRightToLeft(i, j,R,C,matrix );
              break;
                
            }  
        }
    }
  
}

function printdiagonalsLeftToRight(i, j, R, C, matrix) {
  var res = "";
  while (j > 0 && i > 0) {
    i--;
    j--;
  }
  while (i < R && j < C) {
    
    res += matrix[i][j] + " ";   
    i++;
    j++;
    // console.log(i,j);   
  }
  console.log(res);
}

function printdiagonalsRightToLeft(i,j,R,C,matrix )
{
  var res = "";
  while( i>0&&j<C-1)
  { 
    i--;
    j++;
    // console.log(i,j);  
  }

  while (i < R&&j>=0)
  {
    res+=(matrix[i][j])+" ";
    // console.log(i,j);
    i++;
    j--;
  }
  console.log(res); 
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var R = arr1[0];    // no. of rows
    var C = arr1[1];    // no. of columns
   
    matrix = [];
    for (let i = 1; i <= R; i++) {
        var arr = newInput[i].trim().split(" ").map(Number);
        matrix.push(arr); 
    }
    var K = newInput[R + 1];     // elemnet whose diagonals to be find
    
  diagonal(matrix, K, R, C);
  // printdiagonalsRightToLeft(2,1 , R, C, matrix )
  // printdiagonalsLeftToRight(1, 2, R, C, matrix) 
   

     
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(` 4 3
    1 2 3
    4 5 6
    7 8 9
    2 1 0
    6`);
     
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
  