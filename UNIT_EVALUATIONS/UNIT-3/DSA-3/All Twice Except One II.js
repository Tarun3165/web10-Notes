function findNumber(arr)
{
    var obj = {};
    for (let i = 0; i < arr.length;i++)
    {
        if (obj[arr[i]] == undefined)
            obj[arr[i]] = 1;
        else
        {
            obj[arr[i]] += 1;
        }
    }
    for(key in obj)
    { if(obj[key]==1)
        console.log(key);
      
    }
   
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1;i<=T;i++)
    {

        var arr = newInput[2 * i].trim().split(" ").map(Number);
        findNumber(arr)
        // console.log(arr);
    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`6
    5
    2 2 3 3 4 4 5 5 1
    5
    2 2 3 3 4 4 5 5 1
    9
    1 1 2 2 3 3 4 4 5 5 6 6 7 7 8 8 9
    7
    2 2 3 3 4 4 5 5 6 6 7 7 1
    9
    2 2 3 3 4 4 5 5 6 6 7 7 8 8 9 9 1
    9
    1 1 2 2 3 3 4 4 5 5 6 6 8 8 9 9 7
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