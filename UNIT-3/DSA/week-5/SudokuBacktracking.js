var flag = 0;
 
function solveSudoku(arr, i, j)
{
    var ni;
    var nj;
  
    if(i==arr.length)
    {
        flag = 1;
          
        for (let q = 0; q < arr.length;q++)
        { 
            console.log(arr[q].join(" "));
        } 
        return;
    }

    if(j==arr[0].length-1)
    {
        nj = 0;
        ni=i+1;
    }
    else {
        ni = i;
        nj=j+1
    }
    if(arr[i][j]!=0)
    {
        solveSudoku(arr,ni,nj)
    }
    else {
         
       
        for ( let number = 1; number <= 9;number++)
        {
            if (isValid(arr, i, j, number) == true)
            {
                arr[i][j] = number;
                solveSudoku(arr,ni,nj)
                arr[i][j] = 0;  
            } 
            
        }
    } 
}

function isValid(arr,x,y,number)
{
    //row check
    for (let j = 0; j < arr.length;j++)
    {
        if (arr[x][j] == number)
            return false;
    }

    //col check
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i][y] == number)
            return false;
    }

    //3*3 box check
    let bi = (Math.floor(x / 3)) * 3
   let  bj = (Math.floor(y / 3)) * 3
    for (let i = 0; i < 3;i++)
    {
        for (let j = 0; j < 3;j++)
        { if(arr[bi+i][bj+j]==number)
            return false

        }
    }
    return true;
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var sudoku = [];
    for (let i = 0; i < 9;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        sudoku.push(arr);
    }
    solveSudoku(sudoku, 0, 0);
    if(flag==0)
    console.log(-1);
    

    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1 0 5 0 0 0 3 7 0
    0 0 0 0 0 0 2 0 0
    0 9 7 3 0 0 0 1 0
    0 0 0 0 5 3 1 0 2
    3 0 0 8 0 1 0 0 4
    2 0 1 4 7 0 0 0 0
    0 7 0 0 0 9 6 4 0
    0 0 8 0 0 0 0 0 0
    0 1 2 0 0 0 8 0 7
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