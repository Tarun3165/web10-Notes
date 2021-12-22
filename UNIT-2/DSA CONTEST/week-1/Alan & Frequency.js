 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var S = newInput[1].trim().split("").sort();
  
    var obj = {};

    for (let i = 0; i < S.length;i++)
    {
        if (obj[S[i]] == undefined) {
            obj[S[i]] = 1;
        }
        else
            obj[S[i]] += 1;
    }
    
    for(key in obj)
    {
        console.log(key+"-"+obj[key]);
    }
    
     
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    aman 
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
      runProgram(read);29033
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  