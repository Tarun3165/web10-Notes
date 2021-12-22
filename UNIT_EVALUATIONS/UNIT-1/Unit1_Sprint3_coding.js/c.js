 
function checkLoop(arr)
{
  var count = 0;
  for (let i = 0; i < arr.length;i++)
  {
    for (let j = i+1; j < arr.length;j++)
    {
      if (arr[i] == arr[j])
        count++;
      
    }
  }
  if (count > 0)
    console.log("Loop");
  else
  console.log("No Loop");


}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    for (let i = 1; i <= T; i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        checkLoop(arr);
        
        }
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    5
    1 2 3 4 5
    6
    1 2 3 4 6 6 `);
     
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
  