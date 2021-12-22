function marks(questions, X)
{
    var totalMarks = 0;
    var skip = 0;
    for (let i = 0; i < questions.length;i++)
    {
        if (questions[i] <= X)
            totalMarks++;
        else
        {
            skip++;
            if (skip > 1)
                break;
            
            }
         
    }
    console.log(totalMarks);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var NX = newInput[0].trim().split(" ").map(Number);;
    var arr = newInput[1].trim().split(" ").map(Number);
    
    marks(arr, NX[1]);
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`7 6
    4 3 7 6 7 2 2
    
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
  