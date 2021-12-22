function badToGood(data)
{
    var result = "";
    var temp = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i] != data[i + 1])
            result += data[i];
    }
    console.log(result);
   
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i].trim()  ;
       
        badToGood(arr);
    }
   
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    abbb
    aaabbc
    ababaaac`);
     
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
  