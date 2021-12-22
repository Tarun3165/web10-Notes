 
function sortArr(arr, N, K)
{
    var temp;
    for (let i = 0; i < N - 1;i++)
    {
        for (let j = 0; j < N - i-1;j++)
        {
            var a = arr[j] % K;
            var b = arr[j+1] % K;
            if (a > b)
            {
                temp = arr[j+1];
                arr[j + 1] = arr[j];
                arr[j] = temp;

            }
            
        }
    }
    console.log(arr.join(" "));
 }
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var N = arr1[0];
    var K = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
    sortArr(arr, N, K);
    

   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5 6
    12 18 17 65 46 
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
  