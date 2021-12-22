 function checkPrime1(N)
 {
     var bool=true;
     for (let i = 2; i * i <= N;i++)
     {
         if (N % i == 0)
             bool = false;
     }
     if(bool==false)
     console.log("No");
     else if(N==1)
         console.log("No")
     else
         console.log("Yes")
 }


 function checkPrime2(N)
 {
   var count = 0;
     for (let i = 1; i  <= N;i++)
     {
       if (N % i == 0)
         count++;
     }
     if(count==2)
     console.log("Yes")
     
     else  
      console.log("No")
    
 }

function runProgram(input) {
    var N = Number(input);
    //  checkPrime1(N )
     checkPrime2(N )
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`32`);
     
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
  