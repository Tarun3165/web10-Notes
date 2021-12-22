function oddIntegerSum(arr)
{
    var sum = 0;
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] % 2 == 1)     // cheking for odd integer
            sum += arr[i];

    }
    console.log(sum);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);   // no. of test cases
  
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        
        oddIntegerSum(arr);
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
  