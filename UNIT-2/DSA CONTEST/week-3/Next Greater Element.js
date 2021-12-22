 
 function arrProblem(arr)
 {
     var stack = [];
     for (let i = 0; i < arr.length-1;i++)
     {
         var flag = 0;
         for (let j = i + 1; j < arr.length;j++)
         {
             if(arr[j]>arr[i])
             {
                 stack.push(arr[j])
                  flag = 1;
                 break;
             }
         }
         if (flag == 0)
             stack.push(-1);
     }
     stack.push(-1);
     console.log(stack.join(" "));
 }
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[2 * i].trim().split(' ').map(Number)
        
        arrProblem(arr);
        

    }
     


  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    4
    6880 8205 5744 3248 
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
  