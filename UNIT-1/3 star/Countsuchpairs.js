function countPairs(arr,target)
{  
    var count = 0;
    for (let i = 0; i < arr.length;i++)
    {  
        for (let j = i+1; j < arr.length;j++)
        {
            if (arr[i] + arr[j] == target)
                count++;
        }
    }
    console.log(count);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var target = arr1[1];
    var arr2 = newInput[1].trim().split(" ").map(Number);
    countPairs(arr2,target);
  
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5 9
    9 2 7 -2 9`);
     
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
  