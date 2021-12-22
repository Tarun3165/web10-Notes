var ans = -1;

function largestNumber(arr, low, high, N, largest)
{
    if (low > high)
        return;
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] >=largest)
    {
        largest = arr[mid];
        ans=largest
        largestNumber(arr, mid+1, high, N, largest)
        largestNumber(arr, low, mid-1, N, largest)
    }
    else
    {largestNumber(arr, mid+1, high, N, largest)
        largestNumber(arr, low, mid-1, N, largest)
        
        }


}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);

    largestNumber(arr, 0, arr.length - 1, arr.length, arr[0])
    console.log(ans);
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    6 7 8 1 4
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