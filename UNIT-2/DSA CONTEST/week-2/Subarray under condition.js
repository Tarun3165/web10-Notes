 // time complexity:
function checkSubArr(arr)      // brute force approach since all subarrays have to be formed
{
    
    for (let i = 0; i < arr.length;i++)
    {
        for (let j = i; j < arr.length;j++)
        {
            var sum = 0;
            for (let k = i; k <= j;k++)
            {
                
                sum += arr[k];
 
            }
            if (sum == 0)
                console.log(i,j);   // index of subarr 

        }
    }
     
    
 }

function runProgram(input) {
    var arr =   input.trim().split(" ").map(Number);
   
    checkSubArr(arr);
   
     
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`6 3 -1 -3 4 -2 2 4 6`);
     
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
  