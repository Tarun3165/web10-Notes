// 3 stars

function checkSymmetricity(matrix)
{
    var flag1 = 1;
    var flag2 = 1;
    for (i = 0; i < matrix.length;i++)
    {
        var F = 0;
        var L = matrix.length - 1;
        while (F<=L)
        {
            if (matrix[F][i] != matrix[L][i])       // horizontal checking
                flag1 = 0;
          
            if (matrix[i][F] != matrix[i][L])        // vertical checking
                flag2 = 0;
            
            F++;L--
        }
    }

    if(flag1==1&&flag2==1)
    console.log("BOTH");
    else if(flag1==1&&flag2==0)
    console.log("HORIZONTAL");
    else if(flag1==0&&flag2==1)
    console.log("VERTICAL");
    else
        console.log("NO");
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    var count = 1;
    for (let j = 1; j <= T;j++)
    { 
        var N = Number(newInput[count]);
        count++;
        var matrix = [];
        for (let i=count; i <= N+count-1;i++)
        {
            var arr = newInput[i].trim().split("");
            matrix.push(arr);
        }
        count += N;
        checkSymmetricity(matrix);
        // console.log(matrix);
    }
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    4
    *.*.
    .*.*
    *.*.
    .*.*
    3
    .*.
    *.*
    .*.
    3
    ..*
    **.
    ..*`);
     
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
  