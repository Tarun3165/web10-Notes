 function abs(N)
 {
   if (N < 0)
     return -N;
   else
     return N;
 }
 
 function findSum(arr,p1,p2,sum)
 {
   sum += abs(arr[p1] - arr[p2]);
   if(p2>=arr.length-1)
   {
     console.log(sum);
     return;
   }
   else
   {
     p1++;
     p2 = p1 + 1;
   }
   findSum(arr,p1,p2,sum)
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
  var T = +newInput[0].trim();
  for (let i = 1; i <= T;i++)
  {
    var arr = newInput[i * 2].trim().split(" ").map(Number);
    findSum(arr, 0, 1, 0);
    
     
   
  }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8 
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
  