function findGCD(a,b)
{
    
    if (a == 0)
   { console.log(b);
    return b;
   }
   
   
   findGCD(b%a,a)
 }
 
 
//  function findGCD(a,b)
//  {
     
//      if (a == 0)
//     { console.log(b);
//      return b;
//     }
//     else if (b == 0)
//     {
//       console.log(a);
//       return a;
//     }
//     else
//     findGCD(b%a,min(a, b))
//   }
 
 
// function min(a,b)
// {
//   if (a > b)
//     return b;
//   else
//     return a;
// }

// function max(a,b)
// {
//   if (a > b)
//     return a;
//   else
//     return b;
// }

function runProgram(input) {
  
  var newInput = input.split("\n");
  var T = +newInput[0].trim();
   
  for (let i = 1; i <= T;i++)
  {
    var arr = newInput[i].trim().split(" ").map(Number);
    var a = arr[0];
    var b = arr[1];
    
      // findGCD( min(a, b),max(a, b)) ;
      findGCD(a,b) ;
      
  }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`10
    7 4
    9 3
    4 9
    9 4
    10 2
    3 5
    8 2
    9 1
    10 8
    2 10
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
  