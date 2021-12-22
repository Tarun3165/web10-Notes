function generatePattern(N)
{
    for (let i = 0; i < N;i++)
    {
        var temp = "";
        for (let j = 0; j < N;j++)
        {
            if (j % 2 == 0)
                temp += i + " ";
            else
                temp+=j+" "
        }
        console.log(temp);
    }
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    generatePattern(N);
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
   
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