function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var arr2 = newInput[1].trim().split(" ").map(Number);
   
    var totalCost = 0;
    for (let i = 0; i < arr1.length;i++)
    {
        totalCost += arr1[i] * arr2[i];
    }
    if(totalCost<150000)
    console.log("Possible");
  else
      console.log("Not Possible");
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`10000 20000 15000 5000
    2 3 4 3`);
     
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
  