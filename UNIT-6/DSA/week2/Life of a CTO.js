function lowerBound(arr, K, low, high) {
    let ans = -1;
    while (low<=high) {
        
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == K) {
            
            ans = mid;
            high = mid - 1;
        }
        else if (arr[mid] > K)
            high = mid - 1;
        else
            low=mid+1
    }
    console.log(ans);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = newInput[0].trim();
    var arr = newInput[1].trim().split(" ").map(Number);
    lowerBound(arr,1,0,N-1)
    
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5
      0 0 0 0 0
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