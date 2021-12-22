function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = Number(newInput[0]);
    var s = newInput[1].trim();
    var temp = "";
    for (let i = 0; i <= N;i++)
    {
        if(i%2==0)
        {
            temp += s[i];

        }
    }
    var data = "";
     
    for (let j = temp.length-1; j >=0;j--)
    {   
        data += temp[j];
    }
    if (data == temp)
        console.log("yes");
    else
        console.log("no");
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`6
    abcdcfa`);
     
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
  