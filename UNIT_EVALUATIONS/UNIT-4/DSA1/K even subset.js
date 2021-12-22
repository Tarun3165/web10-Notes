var newArr = [];
var totalCount = 0;
function subset(ans, arr, low, high,K)
{  
    var count = 0;
    if(low<=high)
    {
        newArr = ans.split(" ").map(Number);
        for (let i = 0; i < newArr.length-1;i++)
        {
            if(newArr[i]%2==0)
            count++
        }
        if(count>=K)
        totalCount++
     
   }
    for (let i = low; i < high;i++)
    {
        subset(ans+arr[i]+" ",arr,i+1,high,K)
    }
}
        

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i=1; i <= T;i++)
    {    newArr = [];
         totalCount = 0;
        var arr1 = newInput[2 * i - 1].trim().split(" ").map(Number);
        var N=arr1[0];
        var K=arr1[1];
        var arr = newInput[2 * i].trim().split(" ").map(Number);
        subset("",arr,0,N,K)
        console.log(totalCount);;
    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    2 1
    2 3
    4 2
    4 3 2 1
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