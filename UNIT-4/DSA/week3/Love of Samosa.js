function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var N = arr1[0];
    var C = arr1[1];
    var R = arr1[2];
    var arr = newInput[1].trim().split(" ").map(Number);
    arr = arr.sort((a, b) => {
        return a - b;
    })
  // console.log(arr)
    var sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length;i++)
    {
      
      
        if (sum+arr[i]<= R)
       { sum += arr[i];
        count += 1;
        }
        else
            break
    }
  if (count >= C)
    console.log("Party");
  else
    console.log("Sad");
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`10 1 25
    30 42 100 122 30 42 100 122 45 90
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