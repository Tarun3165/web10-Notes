function runProgram(input) {
  
    var newInput = input.split(" ");
    var l = Number(newInput[0]);
    var r = Number(newInput[1]);
    var temp = "";

    for (let i = l; i <= r; i++) {
        var flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0)
                flag++;
            else
                continue;
             
        }
    
        if (i > 1) {
            if (flag == 0)
                temp += i + " ";
            else
                continue;
        }
    }
    console.log(temp);
}
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2 5`);
     
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
  