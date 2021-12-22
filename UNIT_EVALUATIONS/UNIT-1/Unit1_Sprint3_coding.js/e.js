function printGCD(N,M)
{
    var GCD = 0;
  for (let i = 1; i <= N;i++ )
    {    
        if (N % i == 0 && M % i == 0)
            GCD = i;
    }
    console.log(GCD);

}

function runProgram(input) {
  
    var newInput = input.split(" ");
    var N = Number(newInput[0]);
    var M = Number(newInput[1]);
    printGCD(N, M);
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`51 68`);
     
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
  