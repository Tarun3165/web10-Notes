 
function fun(arr,a,b,c)
{  
    if(arr[a]==arr[b])
    { 
        c=c+1;
    }
    if(c>=2)
    {  console.log("no");
          
          return false;
    }
    
      if (b >= arr.length - 1)
    {
        a=a+1;
        b = a+1;
    }
       
    else
    {
       b++;
    }

    if (a == arr.length - 1)
    {   console.log("yes");
        return true;
        
    }
   fun(arr, a, b, c);
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T =+ newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
      fun(arr,0,1,1) ;
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2  
    5  
    1 2 3 4 5  
    3  
    1 2 2 
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
  