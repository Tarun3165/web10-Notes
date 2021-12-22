function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
      var arr = newInput[2 * i].trim().split(" ").map(Number);
   
      let multiply = 1;
      for (let i = 0; i < arr.length;i++)
      {
         multiply*=arr[i]
      }

      for (let i = 0; i < arr.length;i++)
      {
         arr[i]=multiply/arr[i]
      }
      console.log(arr.join(" "));

    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7
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