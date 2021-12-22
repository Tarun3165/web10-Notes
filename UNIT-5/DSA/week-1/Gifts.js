
function solve(arr) {
    let temp = "";
    let maxlength = 0;
    for (let i = 0; i < arr.length;i++)
    {
        temp += arr[i];
        let obj = {};
        for (let j = 0; j < temp.length;j++)
         {
             if(obj[temp[j]]==undefined)
             {
                 obj[temp[j]] = 1;
            }
            else
             {
                 if (temp.length > maxlength)
                     maxlength = temp.length;
                 temp = "";
                 temp += arr[i];
                 break;
           }
        }

        
    }
    console.log(maxlength);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[2 * i].trim().split(" ").map(Number);
       
       solve(arr)
    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1
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