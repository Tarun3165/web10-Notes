
 

function rotateMatrixAnticlock(matrix, n)
{ 
    for (i = 0; i < n;i++)
    {
        var temp = [];               
        for (let j = 0; j < n;j++)
        {
            temp.push(matrix[j][n - 1 - i]);    

        }
        temp = temp.join(" ");
      
        console.log(temp);    // printing rotated matrix
    } 
    
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var n = Number(newInput[0]);   //  no. of rows or columns
  
    var matrix = [];
  
    for (let i = 1; i <= n;i++)
    {   
        var arr = newInput[i].trim().split(" ").map(Number);
        matrix.push(arr);
    }
     
    rotateMatrixAnticlock(matrix,n);
   
     
}

  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8`);
     
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
  