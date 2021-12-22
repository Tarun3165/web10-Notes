 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var arr = [];
    for (let i = 1; i <= N;i++)
    {  arr.push(newInput[i].trim())
    }

    for (let i = 0; i < N;i++)
    {
        if (arr[i] == "India")
            console.log(i+1);
    }
     
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    Russia
    USA
    Japan
    China
    India 
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
  