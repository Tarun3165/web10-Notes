 
 
 

function runProgram(input) {
    
  
    var newInput = input.split("\n");
    var count=0;
    var arr = newInput[1].trim().split(" ").map(Number);
    for (let i = 0; i < arr.length;i++)
    {
        for (let j = i; j < arr.length;j++)
        {
            var sum = "";
            for (let k = i; k <= j;k++)
            {  
                sum += arr[k];
            }
            
            console.log('sum:', sum)
            // if (sum % 2 == 1||sum % 2 == -1)
            //     count++;
        }
    }
    console.log(count);
     

   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`7
    -3 -1 -10 8 -5 0 7 
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
  