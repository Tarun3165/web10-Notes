function runProgram(input) { 
    var newInput = input.split("\n");
    var pointsIndia = Number(newInput[0]);
    var PointsAustralia = Number(newInput[1]);
    var mathesIndia = Number(newInput[2]);
  var mathesAustralia = Number(newInput[3]);
  
  if(pointsIndia>PointsAustralia)
    console.log("India");
  else if(PointsAustralia>pointsIndia)
  console.log("Australia");
  else
  {
    if(mathesIndia<mathesAustralia)
    console.log("India");
    else if(mathesAustralia<mathesIndia)
    console.log("australia");
    else
      console.log("Play another game!");
    }
    
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`500
    500
    10 
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
  