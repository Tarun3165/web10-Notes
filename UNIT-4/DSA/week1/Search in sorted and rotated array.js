function searchInRotatedArr(arr, N, K) 
{
    var low = 0;
    var high = N - 1;
    while(low<=high)
    {
        var mid = Math.floor((low + high) / 2);

        if(arr[mid]==K)
            return mid;
        
        else if(arr[mid]<=arr[high])   // if arr[mid] lies in S.O.S
        {
            if(K>arr[mid]&&K<=arr[high])    // arr[mid] already taken care
                low = mid + 1
            else
                high = mid - 1
        }
            
        else  // (arr[mid]>=arr[low])
        {
            if (K >= arr[low] && K < arr[mid])  //if ar[mid]lies in L.O.S
                high = mid - 1
            else
                low = mid + 1;
            
        }
        
    } 
    return -1;
}


// var ans = -1;
// function  binarySearch(arr,low,high,K)
// {  
//     if (low > high)
//     { 
//         return;
//     }
//     let mid = Math.floor((low + high)/ 2)
//     if(arr[mid]==K)
//     {
//       ans = mid; 
//     }
//     else if (arr[mid] < K)
//      {   binarySearch(arr, mid + 1, high, K);
//       binarySearch(arr, low, mid-1, K);
//     }
//     else
//     binarySearch(arr, low, mid-1, K);
//     binarySearch(arr, mid + 1, high, K);
// }

function runProgram(input) {
  
    var newInput = input.split("\n");
  var arr1 = newInput[0].trim().split(" ").map(Number);
  var N = arr1[0];
  var K = arr1[1];
  var arr = newInput[1].trim().split(" ").map(Number);
  console.log(searchInRotatedArr(arr, N, K));
  
  // binarySearch(arr, 0, N - 1, K)
  // console.log(ans);
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