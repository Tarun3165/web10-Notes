 
 
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    var S = 0;
    var stack = [];
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
       
        if(arr[0]==1)
        {
            stack.push(arr[1]);
        }
        else if(arr[0]==2)
        { 
            if (stack.length == 0)
                S += 1;
            else
            {   S = S - stack[stack.length-1];
                stack.pop();
            }
        }
       
    }
    if (S < 0)
        S = S * (-1);
    console.log(S);
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    1 2
    2
    2 
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
  