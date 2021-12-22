function convertBinary(n) {
  var binary = "";

   while(n)
    {
      rem = n % 2;
      binary = rem+binary;
     n = Math.floor(n / 2); 
  }
  // console.log(binary);
  return binary;
}
function convertDecimal(n) {
  var decimal =0;
  var count = 0;
 
  n = Number(n);
  
  
  while(n)
  {  
    rem = n %10; 
     decimal += rem*(2**count);
    n = Math.floor(n / 10); 
    count++;
  }
  return decimal;
}
 
function complement(S) {
  var temp = "";
  for (let i = 0; i < S.length;i++)
  {
    if (S[i] == "1")
      temp+=0;
    else
    temp+=1; 
  }
  // console.log(temp);
  return temp;
 }

function runProgram(input) {
  
  var newInput = input.split("\n");
  
  var T = +newInput[0].trim();
  for (let i = 1; i <= T;i++)
  {
    var n = +newInput[i].trim();
    let b = convertBinary(n);
    let c = complement(b);
    
    let d = convertDecimal(c);
     
     
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    2147483648
    5
    1
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
  