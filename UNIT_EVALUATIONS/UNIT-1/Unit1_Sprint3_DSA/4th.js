function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = Number(newInput[0]);
    var str = newInput[1].trim();
    var count = 0;
    for (let i = 0; i < N;i++)
    {
        if (str[i] == "a" || str[i] == "e" || str[i] == "o" || str[i] == "i" || str[i] == "u")
            count++;
    }
    if(count>=N/2)
        console.log("Feel good!");
    else
        console.log("Feel bad!");
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    abcd`);
     
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
  