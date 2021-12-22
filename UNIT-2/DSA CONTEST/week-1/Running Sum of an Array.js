 function ArrRunningSun(arr)
 {
     var sum = arr[0];
     var temp = "";
     for (let i = 1; i < arr.length;i++)
     {
         temp += sum + " ";
         sum += arr[i];

     }
     temp += sum + " ";
     console.log(temp);

 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i=1; i <= T;i++)
    {
        var arr = newInput[i*2].trim().split(" ").map(Number);
        ArrRunningSun(arr);
        

    }
     
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    5
    1 2 3 4 5 
    
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
  