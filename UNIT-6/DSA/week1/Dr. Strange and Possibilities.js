function possibility(temp,low,high) {
    if (low<=high+1 )
    {
      console.log(temp);
        
    }
  
    for (let i = low; i <= high;i++)
    {
      possibility(temp+i+" ",i+1,high)
    }
    
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    possibility("",1,N)
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`3
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