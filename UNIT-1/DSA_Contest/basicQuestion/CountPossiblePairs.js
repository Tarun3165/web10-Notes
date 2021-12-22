 function checkPairs(n,m ) 
 {   var x;   
     var y;

      // var eq1 =>  x ** 2 + y =n
      // var eq2 =>  y ** 2 + x =m
     
     var count = 0;
     for (x = 0; x <= n;x++)
     {
         for (y = 0; y <= m;y++)
         {  
             if ((x ** 2 + y == n) && (y ** 2 + x == m))
                 count++; 
         }
     }
     console.log(count);
     
 }

function runProgram(input) {
    var num = input.trim().split(" ").map(Number);
    
    var n = num[0];   //inputs
    var m = num[1];    // inputs
 
    checkPairs(n, m);   // check all pairs of x and y satisfying eq1 and eq2
    
  
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`9 3`);
     
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
  