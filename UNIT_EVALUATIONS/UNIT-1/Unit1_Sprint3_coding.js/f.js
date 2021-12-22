function misbehave(arr)
{
    var count = 0;
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] % 2 == 1 &&arr[i+1] % 2 == 1&&arr[i+2] % 2 == 1)
            count++;
      
    }
    if(count>0)
        console.log("Misbehave!");
    else
        console.log("Behave!");
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        misbehave(arr);
    }
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    6
    1 3 3 4 5 6
    5
    1 2 3 4 5`);
     
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
  