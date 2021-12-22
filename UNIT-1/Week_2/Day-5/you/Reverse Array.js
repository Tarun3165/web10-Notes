function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr =  newInput[1].trim().split(" ").map(Number);
     var temp="";
  for(let i=arr.length-1;i>=0;i--)
  {   temp+=arr[i]+" ";
  }
    console.log(temp);
    
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    12 34 11 9 18`);
     
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
  