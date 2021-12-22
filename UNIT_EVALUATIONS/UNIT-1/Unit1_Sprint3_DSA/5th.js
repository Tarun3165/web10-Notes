function runProgram(input) {
  
    var newInput = input.split("\n");
    var amount = Number(newInput[0]);
    var totalStudents = Number(newInput[1]);
     
      if(amount/totalStudents>=5)
        console.log("Dairy Milk");
    else if(amount/totalStudents>=2)
        console.log("Shots");
    else if(amount/totalStudents>=1)
        console.log("Eclairs",);
    else
        console.log("No Chocolates");
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`102
    10`);
     
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
  