 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var arr = [];
    for (let i = 1; i <= N;i++)
    {
        arr.push(newInput[i].trim());
    }
    arr = arr.sort();
    
    var obj = {};
    for (let i = 0; i < arr.length;i++)
    {
        if (obj[arr[i]] == undefined)
        {
            obj[arr[i]] = 1;
            
        }
        else
        obj[arr[i]] += 1;

    }
     
    for(key in obj)
    {
        console.log(key+" "+obj[key]);
    }
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    school
    masai
    masai 
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
      runProgram(read);29033
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  