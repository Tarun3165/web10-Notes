function solve(arr) {
    
    let value = -1;
        for (let j = 0; j < arr.length;j++)
        {
            if(j==0)
            {
                if (arr[j] != arr[j + 1])
                {
                    value = arr[j];
                    break;
                }
            }
           else if(j==arr.length-1)
            {
                if (arr[j] != arr[j - 1])
                {
                    value = arr[j];
                    break;
                }
            }
            else
            {
                if (arr[j] != arr[j - 1]&&arr[j] != arr[j + 1])
                {
                    value = arr[j];
                    break;
                }
            }
        }
        console.log(value);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim()
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[2 * i].trim().split(" ").map(Number);
        arr = arr.sort((a, b) => {
            return a - b;
        })
       console.log(arr);
        // solve(arr)
    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2
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