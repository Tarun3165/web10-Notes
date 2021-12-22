function checkSABA(matrix,n,m)         
{
    countSABA = 0;
    
    for (let i = 0; i < n;i++)
    {
        for (let j = 0; j < m;j++)
        {  
            if(j+3<m)          // rows
            {   var temp = "";
                temp += matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2] + matrix[i][j + 3];
                 if (temp == "saba")
                    countSABA++;
            }
          
            if(i+3<n)          // columns
            {   var temp = "";
                  temp += matrix[i][j] + matrix[i+1][j] + matrix[i+2][j] + matrix[i+3][j];
                  if (temp == "saba")
                      countSABA++;
            }
            
 
            if(j+3<m&&i+3<n)     // left to right diagonals
            {   var temp = "";
                temp += matrix[i][j] + matrix[i+1][j + 1] + matrix[i+2][j + 2] + matrix[i+3][j + 3];
                 if (temp == "saba")
                    countSABA++;
            }

            // if(j-3>=0&&i+3<n)     //right to  left  diagonals  . Not asked in ques
            // {   var temp = "";
            //     temp += matrix[i][j] + matrix[i+1][j - 1] + matrix[i+2][j - 2] + matrix[i+3][j - 3];
            //      if (temp == "saba")
            //         countSABA++;
            // }

            if(j+3<m&&i-3>=0)     //bottom to top diagonal
            {   var temp = "";
                temp += matrix[i][j] + matrix[i-1][j + 1] + matrix[i-2][j + 2] + matrix[i-3][j + 3];
                 if (temp == "saba")
                    countSABA++;
            }
        }
    }
    console.log(countSABA);
}

 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var n =arr1[0] ;
    var m = arr1[1];
   
    var matrix = [];
    for (let i = 1; i <= n;i++)
    { 
       var arr = newInput[i].trim().split("");
        matrix.push(arr);

    }
    checkSABA(matrix,n,m);
    
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5 5
    safer
    amjad
    babol
    aaron
    songs`);
     
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
  