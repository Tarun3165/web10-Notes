 // lowerbound
 var ansL = -1;
 function  binarySearchL(arr,low,high,K)
 {
     if (low > high)
     {
         
         return;
     }
     let mid = Math.floor((low + high)/ 2)
     if(arr[mid]==K)
     {
       ansL = mid;
       
       binarySearchL(arr,low,mid - 1,K)
     }
     else if (arr[mid] < K)
         binarySearchL(arr, mid + 1, high, K);
     else
     binarySearchL(arr, low, mid-1, K);
 
 }
 
 // upperbound here it is equal to the last element which is equal to K
var ansU = -1;
function  binarySearchU (arr,low,high,K)
{
    if (low > high)
    {
        
        return;
    }
    let mid = Math.floor((low + high)/ 2)
    if(arr[mid]==K)
    {
      ansU = mid;
      
      binarySearchU (arr,mid+1,high,K)
    }
    else if (arr[mid] < K)
        binarySearchU (arr, mid + 1, high, K);
    else
    binarySearchU (arr, low, mid-1, K);

}
   

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var N = arr1[0];
    var K = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
 
  binarySearchL(arr, 0, N - 1, K)
  binarySearchU(arr, 0, N - 1, K)
  console.log(ansU-ansL+1); // Number of occurances
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`6 3
    2 3 3 3 3 3
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