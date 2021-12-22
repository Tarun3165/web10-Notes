 
 


function runProgram(input) {
  
    var newInput = input.split("\n");
  var N;
    stackReverse(N,0)
    
    function stackReverse(N,i)
   {    var N = +newInput[i].trim();
      if (N == -1)
        return false;
      else
      {
          stackReverse(N, i + 1);
         console.log(N);
     
      }
    }
  
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    2
    3
    4
    -1
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
  