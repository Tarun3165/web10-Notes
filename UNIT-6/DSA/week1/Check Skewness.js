
function checkSkewness(N) {
  let evenCount = 0;
  let oddCount = 0;
    
    for (let i = 1; i <= N/2;i++)
    {
        
        if (N % i == 0)
        {   
          if (i % 2 == 0)
            evenCount++;
          else
            oddCount++;
        }
       
        
  }
  if (N % 2 == 0)
    evenCount++;
  else
    oddCount++;
   
    if(evenCount>oddCount)
    {
        console.log("Even Skewed");
        return;
    }
    else if (evenCount < oddCount)
    {
        console.log("Odd Skewed");
        return;
    }
    else
    {
        console.log("Not Skewed");
        return;
    }
}



function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        
        var N = newInput[i].trim();
      
        checkSkewness(N)
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`3
      4
      6
      11
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