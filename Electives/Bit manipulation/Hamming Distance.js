 
 
function findHammingDistance(x,y) 
{
    var count = 0;
    while(x||y)
    {
        if (x % 2 ^ y % 2 == 1)
            count++;
        x =Math.floor(x/ 2);
        y =Math.floor(y/ 2);
    }
    console.log(count);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        var x = arr[0]
        var y = arr[1]
        findHammingDistance(x,y);
   
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    15 7
    0 3 
    `);
     
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
  