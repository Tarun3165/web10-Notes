
function binarySearch(arr, K, low, high) {
    let ans = -1;
    while (low<=high) {
        
        let mid = low + Math.floor((high - low) / 2);
        if (arr[mid] <= K) {
            ans = mid;
            low = mid + 1;
        }
        else 
            high = mid - 1;
       
    }
    return ans;
   
}

function countTriplet(arr, N, K) {
    let count = 0;
    for (let i = 0; i < N;i++)
    {
        let min = i;
        let max=binarySearch(arr, arr[min] + K, 0, N - 1)
        if (max < 0)
            max = N - 1;
        let diff = max - min - 1;
        count +=diff*(diff+1)/2;
        // while(true)
        // {   if(arr[max]-arr[min]<=K)
        //     {
        //         if (max - min - 1 < 1)
        //         break;
        //         count += max - min -1;
        //         //  console.log(min,max);
        //     }
        //     max--;
        // }
    }
    console.log(count);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    let N = arr1[0];
    let K = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
    countTriplet(arr, N, K)
    // let max=binarySearch(arr, arr[min] + K, 0, N - 1)
    // console.log('max:', max)
    
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`9 33
      1 2 4 4 4 5 5 15 20 
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