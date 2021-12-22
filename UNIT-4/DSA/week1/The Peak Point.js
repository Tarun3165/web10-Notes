var ans ;
function  binarySearch(arr,low,high,largest)
{   
    if (low > high)
    {  
        return;
    }
    let mid = Math.floor((low + high)/ 2)
    if(arr[mid]>largest)
    {
      largest = arr[mid]; 
      ans = mid; 
      binarySearch(arr, low, mid-1, largest);
      binarySearch(arr, mid + 1, high, largest);
    }
    else
    binarySearch(arr, low, mid-1, largest);
    binarySearch(arr, mid + 1, high, largest);
}

// function peakPoint(arr) {
//     var largest = 0;
//     var largestIndex = 0;
//     for (let i = 0; i < arr.length;i++)
//     {
//         if (arr[i] > largest&&i!=0&&i!=arr.length-1)
//         {
//             largest = arr[i];
//             largestIndex = i;
//         }
//     }
//     console.log(largestIndex);
// }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {

        var arr = newInput[i * 2].trim().split(" ").map(Number);
        // peakPoint(arr)
        ans = arr[0];
        binarySearch(arr, 0, arr.length - 1,arr[0])
       console.log(ans);
    }

    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3
    10 20 11
    5
    1 3 6 5 4
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