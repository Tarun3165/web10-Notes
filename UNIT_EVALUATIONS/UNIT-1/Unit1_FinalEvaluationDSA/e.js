function checkQuadSolo(arr)
{
    var sum = 0;
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] % 2 == 1)
            sum += arr[i];
    }
    if(sum%4==0)
        console.log("It is Quad");
    else
        console.log("It is Solo");
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        checkQuadSolo(arr);
    }
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3
    1 2 3
    5
    2 2 2 2 1`);
     
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
  