function vovalConsonant(str)
{
    var temp = "";
    for (let i = 0; i < str.length;i++)
    {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" )
            temp += str[i];
    }
    for (let i = 0; i < str.length;i++)
    {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" )
            continue;
        else
        temp += str[i];
    }
     console.log(temp);
    
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    for (let i = 1; i <= T;i++)
    {
        var str = newInput[i * 2].trim();
        1
        6
        vovalConsonant(str);
    }
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    6
    rutwik`);
     
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
  