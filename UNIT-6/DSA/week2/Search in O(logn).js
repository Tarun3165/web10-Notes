

function search(arr, K, low, high) {
    while (low<=high) {
        
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == K) {
            console.log(mid);
            return;
        }
        else if (arr[mid] > K)
            high = mid - 1;
        else
            low=mid+1
    }
    console.log(-1);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    var K = +newInput[2].trim();
    search(arr,K,0,arr.length-1)
   
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5
      1 2 3 5 6
      4
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