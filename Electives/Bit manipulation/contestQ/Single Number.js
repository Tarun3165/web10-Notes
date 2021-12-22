 
 
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var t = +newInput[0].trim();
    for (let i = 1; i <= t;i++)
    {
        var obj = {};
        var flag = 0;
        var arr = newInput[2 * i].trim().split(" ").map(Number);
        for (let i = 0;i<arr.length;i++)
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
            flag = 1;
                break;
          }
        }
        if(flag==0)
        console.log("No");
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    5
    1 2 3 2 1 
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
  