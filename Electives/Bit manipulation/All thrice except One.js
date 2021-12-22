 
 
 function findOddElement(arr)
 {
     var obj = {};
     for (let i = 0; i < arr.length;i++)
     {
         if (obj[arr[i]] == undefined)
             obj[arr[i]] = 1;
         else
             obj[arr[i]] += 1;

     }
     for(key in obj)
     {
         if(obj[key]==1)
           {  console.log(key);
             return;
         }
     }
    
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr= newInput[2*i].trim().split(" ").map(Number);
        findOddElement(arr);
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    7
    1 3 1 3 1 2 3
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
  