function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = newInput[0].trim();
    var arr1 = newInput[1].trim().split(" ").map(Number); 
    var arr2 = newInput[2].trim().split(" ").map(Number);
 
  arr1 = arr1.sort((a, b) => {
    
    return a - b;
  })
  arr2 = arr2.sort((a, b) => {
    
    return a - b;
  })
  
  let max = 0;
  for (let i = 0; i < arr1.length;i++)
  {
    let temp =Math.abs( arr2[i] - arr1[i])
    if (temp > max)
      max = temp;
  }
  console.log(max);
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    -2 4
    -2 0 
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