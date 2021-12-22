function checkPowerOf2(N)
{
    var flag = 0;   // if flag=0 then N is not power of 2
    var i = 0;
    while (2 ** i <= N) {

        if (2 ** i == N) {

            console.log("YES");
            flag = 1;
            break;
        }

        i = i + 1;
    }

    if(flag==0)
    console.log("NO");
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);   // test cases
    for (let i = 1; i <= T;i++)
    {
        var N = Number(newInput[i]);  // input

        checkPowerOf2(N);
    }
   
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    1
    2
    100`);
     
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
  