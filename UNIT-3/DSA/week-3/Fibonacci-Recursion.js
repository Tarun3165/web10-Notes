
 function F(N){
    if(N==0||N==1)
      return N;
     
    else
    {return  F(N-1)+F(N-2);
    }
  }
  
 
 function runProgram(input) {
   
   var newInput = input.split("\n");
   var N=+newInput[0].trim();
    console.log(F(N));
  
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
 