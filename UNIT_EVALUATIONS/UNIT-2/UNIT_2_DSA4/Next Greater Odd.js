 
 
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        var sum = 0;
        for (let i = 0; i < arr.length;i++)
        {
            for (let j = i + 1; j < arr.length;j++)
            {
                if(arr[i]<arr[j])
                {   if(arr[j]%2==1)
                    sum += arr[i];
                    break;
                }
            }
        }
        console.log(sum);
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    5
    2 3 5 8 3 
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
  