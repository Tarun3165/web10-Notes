function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = newInput[0].trim();
    var arr1 = newInput[1].trim().split(" ").map(Number); 
    var arr2 = newInput[2].trim().split(" ").map(Number);
    var flag = 1;
    for (let i = 0; i < arr1.length;i++)
    {
        if (arr1[i] < arr2[i])
        {
            flag = 0;
            break;
          }
        
    }
  if(flag==0)
  console.log("No");
    else
      console.log("Yes");
   
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    123 146 454 542 456
    100 328 248 689 200`);
     
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