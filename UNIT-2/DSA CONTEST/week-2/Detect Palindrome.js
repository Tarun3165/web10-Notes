 function checkPalindrome1(S)
 {
  var temp = "";
  for (let i = S.length - 1; i >= 0;i--)
  {
      temp += S[i]; 
  }
   if(S==temp)
     console.log("Yes");
   else
     console.log("No");

}
 
 function checkPalindrome2(S)
 {
   var start = 0;
   var end = S.length - 1;
   var temp;
   
   while (start < end)
   {
     if (S[start] != S[end])
     { console.log("No");
       return false;
     }
     start++;
     end--;

   }
   console.log("Yes");


 }

function runProgram(input) {
  var S = (input);
  // checkPalindrome1(S);
  checkPalindrome2(S);
  
     
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`12212`);
     
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
  