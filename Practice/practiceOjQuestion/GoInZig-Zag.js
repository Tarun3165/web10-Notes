// 3star question

function zigZagPrint(A,n,m)
{
    var temp = "";
    for (let i = 0; i < n;i++)
    {
        if (i % 2 == 0)
        {
            for (j = m-1; j>=0; j--)
            {
                temp += A[i][j]+" ";
 
            } 
        }

        else
        {   for (j = 0; j<m; j++)
            {
                temp += A[i][j]+" ";
            } 
            
        }
    }

    console.log(temp);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var n = arr1[0];
    var m = arr1[1];

    var twoDArr = [];
    for (let i = 1; i <= n;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        twoDArr.push(arr);
 
    }
    zigZagPrint(twoDArr,n,m);
     
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5 5
    4 7 1 1 7
    8 9 9 6 1
    6 4 9 5 1
    7 7 4 7 7
    8 6 2 5 5`);
     
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
  