 
var ans ;
function  binarySearch(arr,low,high,smallest)
{   
    if (low > high)
    {  
        return;
    }
    let mid = Math.floor((low + high)/ 2)
    if(arr[mid]<smallest)
    {
      smallest = arr[mid]; 
      ans = smallest; 
      binarySearch(arr, low, mid-1, smallest);
      binarySearch(arr, mid + 1, high, smallest);
    }
    else
    binarySearch(arr, low, mid-1, smallest);
    binarySearch(arr, mid + 1, high, smallest);
}

// function minimum(arr) {
//     var smallest = arr[0];
    
//     for (let i = 0; i < arr.length;i++)
//     {
//         if (arr[i] <smallest)
//         {
//             smallest = arr[i];
          
//         }
//     }
//     console.log(smallest);
// }

function runProgram(input) {
  
    var newInput = input.split("\n"); 
     var arr = newInput[1].trim().split(" ").map(Number);
    //  minimum(arr)
  ans = arr[0];
     binarySearch(arr, 0, arr.length - 1,arr[0])
    console.log(ans);

    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`10
    4 6 7 9 10 -1 0 1 2 3
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