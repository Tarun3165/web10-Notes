 // very easy
function runProgram(input) {
    var N = Number(input);
    var sum = 0;
    for (let i = 1; i <= N; i++)
    {
        if (i % 2 == 0)
            sum += i;
    }
    console.log(sum);
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`8`);
     
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
  