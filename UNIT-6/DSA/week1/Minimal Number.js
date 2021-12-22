function minimalNumber(arr) {
    let min = 0;
    let index = 0;
    arr = arr.sort((a, b) => {
        return a - b;
   })
    for (let i = 0; i < arr.length;i++)
    {
      if(arr[i]!=0)
      {
          min = arr[i];
          index = i;
          break;
      }
    }
    let temp = "";
    temp += min;
    for (let i = 0; i < arr.length;i++)
    {
        if (i != index)
            temp += arr[i];
    }
    console.log(temp);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[2*i].trim().split(" ").map(Number);
        minimalNumber(arr)

    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`3
      4
      2 1 0 0
      4
      1 4 2 3
      4
      5 2 3 2
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