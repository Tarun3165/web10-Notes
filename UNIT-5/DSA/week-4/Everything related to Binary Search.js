function lowerBound(arr, K) {
    let ans = -1;
    let low = 0;
    let high = arr.length - 1;
    while (low<=high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] == K)
        {
            ans = mid;
            high = mid - 1;
        }
        else if (arr[mid] < K)
            low = mid + 1;
        else
            high = mid - 1;

    }
    return ans
}

function upperBound(arr, K) {
    let ans = -1;
    let low = 0;
    let high = arr.length - 1;
    while (low<=high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] == K)
        {
            ans = mid;
            low = mid + 1;
        }
        else if (arr[mid] < K)
            low = mid + 1;
        else
            high = mid - 1;

    }
    return ans
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    var K = +newInput[2].trim()
    let L=lowerBound(arr,K)
    let U=upperBound(arr, K)
    let count = 0;
    count = U - L + 1;
    console.log(L,U,count);

  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`6
      1 1 1 2 2 2	
      1
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