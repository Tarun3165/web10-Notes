function fun(arr)
{
    let sum = 0;
    for (let i = 0; i < arr.length;i++)
    {     for (let j = i+1; j < arr.length;j++)
        {
        
            if (arr[i] < arr[j])
            {
                sum += arr[i];
                break;
            }
        }
    }
    console.log(sum);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        fun(arr);

    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`10
    10
    7 10 8 1 2 1 10 6 3 9
    8
    5 1 2 3 2 8 7 6
    8
    8 5 8 7 8 2 4 10
    2
    5 8
    5
    8 6 4 10 5
    5
    3 1 2 6 2
    8
    9 9 9 10 8 4 5 9
    2
    9 2
    4
    5 5 8 10
    8
    2 1 3 7 9 6 1 5
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