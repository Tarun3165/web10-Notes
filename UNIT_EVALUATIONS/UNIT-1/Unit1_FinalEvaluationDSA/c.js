function countPairs(arr,M)
{
    countDivisible = 0;
    for (let i = 0; i < arr.length;i++)
    {
        for (let j = i+1; j < arr.length;j++)
        {
            if ((arr[i] + arr[j]) % M == 0)
                countDivisible++;
 
        }
    }
    console.log(countDivisible);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    var count = 1;
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[count].trim().split(" ").map(Number);
        count++;
        var M = arr1[1];      // M is the integer 
        var arr = newInput[count].trim().split(" ").map(Number);
        count++;
        countPairs(arr, M);
    }
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3 2
    1 3 2
    5 4
    3 2 2 1 5`);
     
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
  