function calculate(A,B,C,K)
{
  let x=0
   
  while(x>=0)
  {  
    if (A*x ** 2 + B*x + C >= K)
      break;
    
    x++;
  }
  if(x==0)
    console.log(-1);
  else
  console.log(x);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        var A = arr[0];
        var B = arr[1];
        var C = arr[2];
        var K = arr[3];
         calculate(A,B,C,K)
        
    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    3 2 4 15
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