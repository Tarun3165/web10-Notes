// 4 star question

function runProgram(input) {
  
    var newInput = input.split("\n");
   
    var arr = newInput[1].trim().split(" ").map(Number);
    var count = 1;
  var maxCount = 0;
 
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] % 2 == 1)
        { 
            if (arr[i] == arr[i + 1]) {
                count++;
            }
          
            else {
                count = 1;
            }
            if (count > maxCount)
            maxCount = count; 
     
        }

      }
  
    console.log(maxCount); 
    
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`12
      81 1 3 3 3 2 6 4 8 1 1`);
     
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
  