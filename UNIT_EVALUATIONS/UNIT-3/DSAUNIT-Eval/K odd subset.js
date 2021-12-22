
var countSubset = 0;
function fun(temp, arr, low, high,K)
{  
    var count = 0;
    if (temp.length > 0)
    { 
        var x = temp.split(" ").map(Number);
        // console.log(temp);
        console.log(x);
        for (let i = 0; i < x.length;i++)
        {
            if (x[i] % 2 == 1)
                count++;
        }
        if (count >= K)
            countSubset++;
     
    }
    
    if (low >= high)
    {
        // console.log(temp);
        return;
        
    }
    for (let i = low; i < high;i++)
    {
        fun(temp+" "+arr[i],arr,i+1,high ,K)
    }

}

function runProgram(input) {
  
    var newInput = input.split("\n");

     var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    { 
        countSubset = 0;
        var arr1 = newInput[i * 2 - 1].trim().split(" ").map(Number);
        var N = arr1[0];
        var K = arr1[1];
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        fun("", arr, 0, N ,K);
        console.log(countSubset);
        
    } 
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    3 2
    10 3 3
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