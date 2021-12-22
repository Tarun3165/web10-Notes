let ans = -1;
function searchGE(arr, low, high, K)
{
  while(low<=high)
  {
    let mid = Math.floor((low + high) / 2);
 

     if (arr[mid] >= K) {
      ans = mid;
      high = mid - 1;
    }
    else
    low = mid + 1;
  }
  return ans;
}

 ans = -1;
 function searchG(arr, low, high, K)
 {
   while(low<=high)
   {
     let mid = Math.floor((low + high) / 2);
 
      if (arr[mid] > K) {
       ans = mid;
       high = mid - 1;
     }
     else
     low = mid + 1;
   }
   return ans;
 }



function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
  var arr = newInput[1].trim().split(" ").map(Number);
  arr = arr.sort((a, b) => {
    return a - b;
  })
  console.log('arr:', arr)
  let index;
    var T = +newInput[2].trim();
    for (let i = 3; i < 3 + T;i++)
    {
      var arr1 = newInput[i].trim().split(" ").map(Number);
      let K = arr1[1];
      let count = 0;
        if(arr1[0]==0)
        {
           index = searchGE(arr, 0, N - 1, K);
        }
        else
        {
          index = searchG(arr, 0, N - 1, K);
      }
      if (index == -1)
        count = 0;
      else
      count = N - index;
      console.log(count);
    }
   
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`7
      94579695 511964981 146650229 206751262 304866014 597832343 399973802
      1
      0 146650229
      1 3
      0 3
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