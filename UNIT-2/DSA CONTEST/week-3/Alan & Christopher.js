 
 
 function Enigma(S)
 {
   var stack = [];

   for (let i = 0; i < S.length;i++)
  {   
     if (S[i] != "#")
       stack.push(S[i]);
     else
       stack.pop();
    
   }
   console.log(stack.join(""));
  
  
 }

function runProgram(input) {
  
       var newInput = input.split("\n");
     var T = newInput[0].trim();
     for (let i = 1; i <= T;i++)
     {
       var S = newInput[i].trim();
       Enigma(S);
        
  }
 
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    acb#
     a#bc
     abc##
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
  