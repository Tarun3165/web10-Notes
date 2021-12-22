 

function matrixSum(data1, data2, R1, C1, R2, C2)
{   
    if (R1==R2&&C1==C2)
    for (let i = 0; i < R1; i++)
    {
        var temp="";
        for (let j = 0; j < C1; j++) {
            temp += data1[i][j] + data2[i][j]+" ";
        }
        console.log(temp);
    }
    
    else
    console.log(-1);

}

function LinesToArr(row)
{
     
    return row.trim().split(" ").map(Number);

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number); 
    
    var R1 = arr1[0];
    var C1 = arr1[1];
    var R2 = arr1[2];
    var C2 = arr1[3];
    
    // var arr1_lines = newInput.slice(1, R1 + 1);
   
    // var arr2_lines = newInput.slice(R1 + 1);
    // var data1 = arr1_lines.map(LinesToArr);
 
    // var data2 = arr2_lines.map(LinesToArr);
    
    // matrixSum(data1,data2,R1,C1,R2,C2); 
  
  var matrix1 = [];
  var matrix2 = [];
  for (let i = 1; i <= R1;i++)
  {   
    var arr = newInput[i].trim().split(" ").map(Number);
    matrix1.push(arr);

  }
  for (let i = R1+1; i <= R2+R1;i++)
  {   
    var arr = newInput[i].trim().split(" ").map(Number);
    matrix2.push(arr);

  }
  matrixSum(matrix1, matrix2, R1, C1, R2, C2);
  
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4 6 4 6
    1 2 4 6 4 6 
    3 4 5 8 7 8
    1 2 2 6 2 6
    3 4 4 7 45 8
    2 3 3 7 4 7
    4 5 3 7 47 5
    2 3 3 75 6 8
    4 5 5 8 6 9`);
     
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
  