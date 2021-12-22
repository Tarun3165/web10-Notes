function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    let maxCount = 0;
    let oddCount = 1;
    let flag = 0;
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] % 2 == 1)
            flag = 1;
        if (arr[i] % 2 == 1 && arr[i]==arr[i+1] )
        oddCount++;
        else
        {
            if (oddCount > maxCount)
                maxCount = oddCount;
            
            oddCount = 1;

        }
    }
    if(flag==0)
    console.log(0);
    else
    console.log(maxCount);
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`17
    1 1 1 1 7 7 7 2 2 2 2 2 2 2 2 3 3
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