function length(S,i){
    if(!S[i])
      return 0;
    else 
    {   
      return 1+length(S,i+1)
     }
      
  }
 
 function runProgram(input) {
   
   var newInput = input.split("\n");
   var S=newInput[0].trim();
   let i=0;
   console.log(length(S,i))
  
 }
 if (process.env.USERNAME === "TARUN RAWAT") {
   runProgram(`masaischool 
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