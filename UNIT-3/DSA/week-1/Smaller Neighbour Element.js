 
 
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    var stack = [];
    var temp = "";
    
    stack.push(arr[0]);
    for (let i = 0; i < arr.length;i++)
    {
      while(arr[i]<=stack[ stack.length-1])
      {
        stack.pop();
      }
      
      if (stack.length == 0)
      {
        temp += -1 + " ";  
      }
      else
      {
        temp += stack[stack.length - 1] + " "; 
      }
      stack.push(arr[i]);
    }
    console.log(temp);
   
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`8
    39 27 11 4 24 32 32 1 
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
  