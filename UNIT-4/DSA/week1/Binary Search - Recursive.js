function  binarySearch(arr,low,high,K)
{
    if (low > high)
    {
        console.log(-1);
        return;
    }
    let mid = Math.floor((low + high)/ 2)
    if(arr[mid]==K)
    {  console.log(1);
        return 1;
    }
    else if (arr[mid] < K)
        binarySearch(arr, mid + 1, high, K);
    else
    binarySearch(arr, low, mid-1, K);

}
   

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var N = arr1[0];
    var K = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
 
   binarySearch(arr,0,N-1,K)
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5 4
    1 2 3 4 5
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