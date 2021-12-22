// 4 star question

// check sum of 3 consecutive elements in either direction to be equal to s.

  
function checkSum2(matrix, n, m, s)
{
    var countSum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if(j+2<m)       // rows
            {   var sumR = 0;
                sumR += matrix[i][j]+matrix[i][j+1]+matrix[i][j+2]; 
                if (sumR == s)
                countSum++;
            }

            if(i+2<n)     // columns
            {   var sumC = 0;
                sumC += matrix[i][j] + matrix[i + 1][j] + matrix[i + 2][j];
                 if (sumC == s) 
                 countSum++;
            }
            
            if(i+2<n&&j+2<m)         // dounward diagonal from left to right
            {   var sumD = 0; 
                sumD += matrix[i][j] + matrix[i + 1][j + 1] + matrix[i + 2][j + 2];
                if (sumD == s)
                countSum++;
            }
            
            if(i-2>=0&&j+2<m)       // upward diagonal from left to right  (this also covers dounward direction from right to left )
            {   var sumD = 0;
                sumD += matrix[i][j] + matrix[i -1][j + 1] + matrix[i - 2][j + 2];
                if (sumD == s)
                countSum++;
            }
        }
    }
    console.log(countSum);
    
}

function checkSum1(matrix, n, m, s)
{
    var countSum = 0;
    countSum=checkSumRow(matrix, n, m, s,countSum);
    
    countSum=checkSumColumn(matrix, n, m, s,countSum);
   
    countSum= checkSumDiagonal(matrix, n, m, s,countSum);
    
    console.log(countSum); 
}


function checkSumRow(matrix,n,m,s,countSum)
{ 
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
                if(j+2<m)
            {   var sumR = 0;
                sumR += matrix[i][j]+matrix[i][j+1]+matrix[i][j+2]; 
                if (sumR == s)
                countSum++;
            }
        }
    } 
    return countSum; 
}

function checkSumColumn(matrix,n,m,s,countSum)
{ 
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
             if(j+2<n)
            {   var sumC = 0;
                 sumC += matrix[j][i] + matrix[j + 1][i] + matrix[j + 2][i];
                 if (sumC == s) 
                  countSum++;
            }
        }
    }
    
    return countSum; 
}

function checkSumDiagonal(matrix,n,m,s,countSum)    // have to take all kinds of diagonals including small diagonals
{ 
    var sumD2 = 0;
    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < m; j++)
        {     
            if(i+2<n&&j+2<m)         // dounward diagonal from left to right
            {   var sumD = 0; 
                sumD += matrix[i][j] + matrix[i + 1][j + 1] + matrix[i + 2][j + 2];
                if (sumD == s)
                countSum++;
            }
            
            if(i-2>=0&&j+2<m)       // upward diagonal from left to right  (this also covers dounward direction from right to left )
            {   var sumD = 0;
                sumD += matrix[i][j] + matrix[i -1][j + 1] + matrix[i - 2][j + 2];
                if (sumD == s)
                countSum++;
             } 
        }
    } 
    return countSum;  
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var n = arr1[0];  
    var m = arr1[1];
    var s  = arr1[2];
    matrix=[];
    for (let i = 1; i <=n;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        matrix.push(arr);
        
    }
    // checkSum1(matrix, n, m, s);    
    checkSum2(matrix, n, m, s);    
    
    
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4 4 11
    1 2 1 8
    2 2 8 6
    8 1 2 5
    2 5 8 6`);
     
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
  