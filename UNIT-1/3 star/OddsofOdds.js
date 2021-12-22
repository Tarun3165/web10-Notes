function CheckCountOddElement(arr)
{
    var count = 0;
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] % 2 == 1)
            count++;

    }
    if(count%2==1)
    console.log("Yes");
    else
        console.log("No");

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (let i = 1; i <= t;i++)
    {
        var Ai = newInput[2 * i].trim().split(" ").map(Number);
        CheckCountOddElement(Ai);
    }
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    1
    1
    2
    1 101
    2
    1 200`);
     
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
  