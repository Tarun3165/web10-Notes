 
function sumArrDigits(arr)
{
    
    var sum = 0;
    for (let i = 0; i < arr.length;i++)
    {
        sum += sumDigits(arr[i]);
         
    }
    console.log(sum);
}

function sumDigits(N)
{
    var S=0;
   
    while(N)
    {
        S += N % 10;
        N = Math.floor(N / 10);
    }
    return S;
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        sumArrDigits(arr);
        
    }
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51 
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
  