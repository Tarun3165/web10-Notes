// 4 star question

function checkZeroArr(arr, N)
{
    for (let i = 0; i < N;i++)
    {
        if(N==1)
        {
            if (arr[i] == 0)
                return "YES";
            else
                return "NO";
        }
        else
        {
            if(arr[i]>0&&i<N-1)
            {
              arr[i+1] -= arr[i];
                arr[i] = 0;
            }
          
        }
    }
     
    for (let i = 0; i < N;i++)
    {
        if (arr[i] != 0)
            return "NO";
    }
    return "YES";
}

function runProgram(input) {
  
     var newInput=input.split("\n") 
    var N = Number(newInput[0]);
    var arr = newInput[1].trim().split(" ").map(Number);

    console.log(checkZeroArr(arr, N));
   
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    2 4 3 1`);
     
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
  