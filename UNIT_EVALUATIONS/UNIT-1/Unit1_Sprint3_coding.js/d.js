function Greater_Ahead(arr)
{
    var count = 0;
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] > arr[i + 1])
            count++;
        
        }
        console.log(count);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    for (let i = 1; i <= T; i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
         
        Greater_Ahead(arr);
        
        }
     
   
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    5 
    1 4 2 3 5
    5
    5 4 3 2 1`);
     
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
  