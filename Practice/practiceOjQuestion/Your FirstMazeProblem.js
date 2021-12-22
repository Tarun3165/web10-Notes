// 3 star question

function mazeDecode(str)
 {   var x = 0;
     var y = 0;
     for (let i = 0; i < str.length;i++)
     {
         if (str[i] == "L")
             x = x - 1;
         else if (str[i] == "R")
             x = x + 1;
         else if (str[i] == "U")
             y = y + 1;
         else
             y = y - 1;
     }
     console.log(x,y);   // final point
 }

function runProgram(input) {
    var str = input;
    
     // (x,y)=(0,0) starting point
    mazeDecode(str);
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`LLRDDR`);
     
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
  