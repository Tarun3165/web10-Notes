var newArr = [];
   function answerQuery(arr)
   {
    for (let i = 0; i <10;i++)
    {
        var Z = arr.shift();
        newArr.push(Z);
        Z = Math.floor(Z / 2);
        if(Z!=0)
        arr.push(Z);
        arr = arr.sort( (a,b)=> {
            return b - a;
        })
    }
    
     
   }

 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var N = arr1[0];
    var q = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
    answerQuery(arr);
    for (let i = 2; i <= q + 1;i++)
    {
        var n = +newInput[i].trim();
        console.log(newArr[n-1]);
    }
    
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4 6
    8 5 3 1
    1
    2
    3
    4
    6
    8 
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
  