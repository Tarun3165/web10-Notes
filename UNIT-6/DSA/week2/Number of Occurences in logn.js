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
    return ans
}

function upperBound(arr, K, low, high) {
    let ans = -1;
    while (low<=high) {
        
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == K) {
            ans = mid;
            low = mid + 1;
        }
        else if (arr[mid] > K)
            high = mid - 1;
        else
            low=mid+1
    }
    return ans;
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    let N = arr1[0];
    let K = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
    let l=lowerBound(arr,K,0,N-1)
    let u = upperBound(arr, K, 0, N - 1)
    if(l==u && l==-1)
    console.log(0);
    else
    console.log(u-l+1);
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`6 3
      2 5 3 4 6 9
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