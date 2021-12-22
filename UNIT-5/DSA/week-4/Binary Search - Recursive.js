let ans = -1;
function RecursiveBinarySearch(arr,low,high,K)
{
    if (low > high)
        return -1;
   
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] == K)
        {
            ans = 1;
            return 1;
        }
        else if(arr[mid]<K)
     return   RecursiveBinarySearch(arr, mid + 1, high, K)
    else
     return   RecursiveBinarySearch(arr, low, mid - 1, K)
   
    
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    let N = arr1[0];
    let K = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
  
    console.log(RecursiveBinarySearch(arr,0,N-1,K))
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5 1
      2 -2 0 3 4
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