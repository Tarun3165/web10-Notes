 
 
 

function runProgram(input) {
  
  var newInput = input.split("\n");
  var T = +newInput[0].trim();
  var UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 1; i <= T;i++)
  {
    var sum = 0;
    var count = 0;
    var S = newInput[i].trim();
    for (let j = S.length-1; j >=0;j--)
    {
      for (let k = 0; k < UC.length;k++)
      {
        if(S[j]==UC[k])
        {
          sum += (k + 1) * (26 ** count);
          count++;
        }
      }
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
  