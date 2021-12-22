function fun(a, b, c, K) {
    var x = 0;
    
 while(a * x ** 2 + b * x + c<=K)
 {
     x=x+1;
     
    }
    console.log(x-1);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {

        var arr = newInput[i].trim().split(" ").map(Number);
        var a = arr[0];
        var b = arr[1];
        var c = arr[2];
        var K = arr[3];
       fun(a,b,c,K)
    }

    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    1 1 1 20
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