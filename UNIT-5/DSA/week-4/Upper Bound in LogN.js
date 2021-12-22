let ans=-1;

function upperBound(arr, N, k) {
    let low = 0;
    let high = N - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] > k) {
            ans = mid;
            high = mid - 1;
        }
        else
            low = mid + 1;

        }
        console.log(ans);
     
}


function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    let N = arr1[0];
    let k = arr1[1];
    var arr2 = newInput[1].trim().split(" ").map(Number);
    upperBound(arr2,N,k)

  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`3 200
      101 200 1445
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