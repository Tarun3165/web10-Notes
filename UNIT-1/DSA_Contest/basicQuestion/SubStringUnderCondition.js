// 3-4 star question

// using 2 loops
function runProgram(input) {
  var S = input;
  var count = 0;
 
  for (let i = 0; i < S.length;i++)
  {
    var temp = "";
    for (let j = i;j<S.length;j++)
    {
      temp += S[j];
 
      console.log(temp);
      if (temp[0] == temp[temp.length - 1])
        count++;
      
    }
  }
  console.log(count);
   
}

// using 3 loops

// function runProgram(input) {
//   var S = input;
//   var count = 0;
  
//   for (let i = 0; i < S.length;i++)
//   {
//     for (let j = i;j<S.length;j++)
//     {
//       var temp = "";
//       for (let k = i; k <= j;k++)
//       {   
//         temp += S[k];
        
//       }
//       if (temp[0] == temp[temp.length - 1])
//       count++;
//     }
//   }
  
//   console.log(count);
// }

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
  