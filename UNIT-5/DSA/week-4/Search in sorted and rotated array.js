function searchInSortedRotated(arr, N, K) {
    let ans = -1;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
     
     
        if (arr[mid] == K)
        {
            ans = mid;
            break;
        }

       else if(arr[mid]<=arr[high])
        {
            if (K > arr[mid] && K <= arr[high]) {
                low = mid + 1;
            }
            else
                high = mid - 1;
        }

       else if(arr[low]<=arr[mid])
        {
            if (K >= arr[low] && K < arr[mid]) {
                high = mid - 1;
            }
            else
            low = mid + 1;
        }
        
        
    }
    console.log(ans);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    let N = arr1[0];
    let K = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
    
    searchInSortedRotated(arr, N, K);

  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`15 14
      10 11 12 13 14 15 -1 0 1 2 3 4 5 7 8
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