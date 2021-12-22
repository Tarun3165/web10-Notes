function runProgram(input) {
  
    var newInput = input.split("\n");  
    var K = Number(newInput[2]);     // monthly salary
    var arr = newInput[1].trim().split(" ").map(Number);   // bill information
  
  var totalExpenditure = 0;
  
    for (let i =0; i < arr.length;i++)
    {
        totalExpenditure += arr[i];
        
    }
  
    if(totalExpenditure < K )
      console.log("Save");    
      
    else if(totalExpenditure > K)
      console.log("Debt");
      
    else
        console.log("Neutral");
    
     
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    1 2 3 4 5
    16`);
     
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
  