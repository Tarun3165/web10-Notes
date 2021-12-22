var ans = -1;
function  binarySearch(arr,low,high,K)    // just greater then K
{
    if (low > high)
    { 
        return;
    }
    let mid = Math.floor((low + high)/ 2)
    if(arr[mid]>K)
    {
      ans = mid; 
      binarySearch(arr,low,mid-1,K)
    }
     
    else
    binarySearch(arr, mid+1, high, K);

}
   

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var N = arr1[0];
    var K = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
 
  binarySearch(arr, 0, N - 1, K)
  console.log(ans);
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`10 3
    0 2 4 4 5 5 7 7 9 10
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