 function countSubstring(str)
 {
   count = 0;
   var arr = [];
   for (let i = 0; i < str.length;i++)
   {
     for (let j = i; j < str.length;j++)
     {
       var temp = "";
       for (let k = i; k <= j;k++)
       {  
         temp += str[k];

       }
       if (temp[0] == temp[temp.length - 1])
         count++;
     }
   }
   console.log(count);

}
 
function runProgram(input) {
    var S =  input ;

  countSubstring(S);
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`abcab`);
     
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
  