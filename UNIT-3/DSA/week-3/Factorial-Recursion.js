function factorial(N){
    if(N==0||N==1)
      return 1;
    else
    {return N*factorial(N-1);
    }
  }
  
 
 function runProgram(input) {
   
   var newInput = input.split("\n");
   var N=+newInput[0].trim();
    console.log(factorial(N));
  
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