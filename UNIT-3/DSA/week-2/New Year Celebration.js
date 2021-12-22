  

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    var queue = [];
    var stack = [];
    
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        if(arr[0]==1)
        {
            queue.push(arr[1]);
        }
        else if(arr[0]==2)
        {
            stack.push(arr[1]);
        }
        else if(arr[0]==3)
        {if(queue.length==0)
            console.log(-1);
            else
            console.log(queue[0]);
        }
        else if(arr[0]==4)
        {   if(stack.length==0)
            console.log(-1);
            else
            console.log(stack[stack.length-1]);
        }
        else if(arr[0]==5)
        {   if(queue.length==0)
            console.log(-1);
            else
            stack.push(queue.shift());
        }

  } 
 
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`8
    4
    1 4
    2 3
    1 2
    3
    4
    5
    4 
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
  