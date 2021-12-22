var count = 0;
 
function fun(temp, arr, low, high)
{  
    if (temp.length > 0)
    { 
       var x = temp.split("").map(Number);
       if(x[0]%2==1&&x[x.length-1]%2==1)
       {  
           count++;
          
       }
     
    }
    
    if (low >= high)
    {
        // console.log(temp);
        return;
        
    }
    for (let i = low; i < high;i++)
    {
        fun(temp+arr[i],arr,i+1,high )
    }

}

function runProgram(input) {
  
    var newInput = input.split("\n");

     var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
      count = 0;
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        fun("", arr, 0, arr.length );
        
        if(count>=1)
        console.log("yes");
        else
            console.log("no");
    } 
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    1
    3
    8
    2 5 10 2 8 6 2 8
    10
    2 4 4 6 3 2 7 4 4 10
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