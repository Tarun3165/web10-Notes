 function stringCut(S)
 {
     var string = S.split("");
     var l = 0;
     var m = Math.floor(S.length/2)-1;
     var n = Math.floor((S.length+1)/2);
     var o = S.length - 1;
     var temp="" ;
     while(l<m)
     {
       temp = string[l];
       string[l] = string[m];
       string[m] = temp;
       l++;
       m--;
         
     }
     while(n<o)
     {
       temp = string[n];
       string[n] = string[o];
       string[o] = temp;
       n++;
       o--;
         
     }
     string = string.join("");
     console.log(string);
    
 }

function runProgram(input) {
    var S = input.trim();
    stringCut(S);
     
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`abcdxyz`);
     
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
  