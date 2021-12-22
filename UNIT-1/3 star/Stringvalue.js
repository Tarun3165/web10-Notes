 function stringValue(str)
 {
     var strValue = 0;
     var alphabets = "abcdefghijklmnopqrstuvwxyz"
     for (let i = 0; i < str.length;i++)
     {
         for (let j = 0; j < alphabets.length;j++)
         {
             if (str[i] == alphabets[j])
             strValue += j + 1;
            
         }
     }
     console.log(strValue);
 }

function runProgram(input) {
    var S = input;
    stringValue(S);
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`aba`);
     
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
  