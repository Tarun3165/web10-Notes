
 var flag1 = 0;
var flag2 = 0;
 
function checkTicToc(matrix)
{ 
  checkRow(matrix);
  checkColumn(matrix);
  checkDiagonal(matrix);

  // console.log(flag1,flag2);

  if(flag1==1)
  console.log("o");
  else if(flag2==1)
  console.log("x"); 
  else
  console.log("Tie");
   
    
}

function checkRow(matrix)
{ 
  for (let i = 0; i < matrix.length;i++)
  {
    var countx = 0;
    var counto = 0;
    for (let j = 0; j < matrix[i].length; j++)
    {   
      if (matrix[i][j] == "o")
        counto++;
      else if (matrix[i][j] == "x")
        countx++; 
    }

    if (counto == 3)
      flag1 = 1;
    else if (countx == 3)
      flag2 = 1;
  } 

}

function checkColumn(matrix)
{ 
  for (let i = 0; i < matrix.length;i++)
  {
    var countx = 0;
    var counto = 0;
    for (let j = 0; j < matrix[i].length; j++)
    {   
      if (matrix[j][i] == "o")
        counto++;
      else if (matrix[j][i] == "x")
        countx++; 
    }

    if (counto == 3)
      flag1 = 1;
    else if (countx == 3)
      flag2 = 1;
    }

}

function checkDiagonal(matrix)
{ 
  var countxD1 = 0;    // for diagonal 1
  var countoD1 = 0;     
  var countxD2 = 0;    // for diagonal 2
  var countoD2 = 0;
  for (let i = 0; i < matrix.length;i++)
  {
    for (let j = 0; j < matrix[i].length; j++)
    {
      if (i == j ) 
      {   if (matrix[j][i] == "o")
            countoD1++;
          else if (matrix[j][i] == "x")
            countxD1++;
      }

      if ( i+j==2) 
      {   if (matrix[j][i] == "o")
            countoD2++;
          else if (matrix[j][i] == "x")
            countxD2++;
      }
    }

    if (countoD1==3||countoD2==3)
      flag1 = 1;
    else if (countxD1 ==3||countxD2==3)
      flag2 = 1;
    }

}

function runProgram(input) {
  
    var newInput = input.split("\n");

    var line1 = newInput[0].trim().split(" ");
    var line2 = newInput[1].trim().split(" ");
    var line3 = newInput[2].trim().split(" ");
    var matrix = [];
  matrix.push(line1, line2, line3);
  // console.log(matrix);
  checkTicToc(matrix);
   
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`x o o
    o o x
    o x x`);
     
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
  