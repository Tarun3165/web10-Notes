 
 
function checkPower2(N) {
    if(N==0)
    {   console.log("NO");
        return;
    }
     while(N)
     {
         if(N==1)
         {
             console.log("YES");
             return;
         }
         N = N / 2;
    }
    console.log("NO");
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[i].trim();
        checkPower2(N);
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    1
    2
    100 
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
  