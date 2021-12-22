 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    var UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var indexVal = 0;
    
    for (let i = 1; i <= T;i++)
    {
        var S = newInput[i].trim();
        var count = S.length - 1;
        var sum = 0;
        for (let j = 0; j < S.length;j++)
        {   
            for (let k = 0; k < UC.length;k++)
            {
                if (S[j] == UC[k])
                {
                    indexVal = k +1;
                    break;
                }
            }
            sum += indexVal * (26) ** (count);
            count--;
        }
        console.log(sum);
    }
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    A
    AB
    ZY 
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
  