 
 
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    var queue = [];
   
    for (let i = 1; i <= T; i++) {
        const arr = newInput[i].trim().split(" ");
        if (arr[0] == "E")
        { 
            queue.push(arr[1]);
        }
        else if (arr[0] == "D")
        { 
          if ( queue.length==0)
          console.log("Empty");
            
            else
            {   console.log(queue.shift()); 
            }
        }
        
            
    }
 
  
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`13
    D
    E 74
    E 24 
    D
    D
    D
    E 10
    D
    E 110
    D
    D
    E 120
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
  