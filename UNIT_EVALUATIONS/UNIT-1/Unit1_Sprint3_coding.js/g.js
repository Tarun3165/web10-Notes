function SUM(arr,K)
{
    var sum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] <= K)
            sum += arr[i];
    }
    console.log(sum);
     

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var arr = newInput[1].trim().split(" ").map(Number);
    var K = arr1[1];
    SUM(arr, K);
   
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4 2
    1 2 3 4`);
     
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
  