 function countConsonant(str)
 {
     var count = 0;
     for (let i = 0; i < str.length;i++)
     {
         if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")
             continue;
         else
             count++;
     }
     console.log(count);
 }
function runProgram(input) {
    var S = input;
    countConsonant(S);
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`masaischool`);
     
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
  