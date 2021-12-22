 function reverseSentence(str)
 {
     temp = "";
     for (let i = str.length-1; i >=0 ;i--)
     {
         if (i == str.length - 1)
             temp += str[i];
         else
         temp += " "+str[i] ;

     }
     console.log(temp);
     
}
 
function runProgram(input) {
    var S = input.split(" ");
   
    reverseSentence(S);
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`A Transformation in education`);
     
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
  