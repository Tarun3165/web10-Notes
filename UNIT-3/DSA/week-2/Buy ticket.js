 
 
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    var queue = []; 
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i].trim().split(" ");
        if(arr[0]=="E")
        {
            queue.push(arr[1]);
            console.log(queue.length);
        }
        else if(arr[0]=="D")
        {
            var x;
            if (queue.length == 0)
                x = -1;
                else
             x = queue.shift();

            console.log(x,queue.length);
        }
        

    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5
      E 2
      D
      D
      E 3
      D
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
  