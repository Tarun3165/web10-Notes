function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim()
    for (let i = 1; i <= T;i++)
    {

        var arr = newInput[2 * i].trim().split(" ").map(Number);
        
        let obj = {}
        for (let j = 0; j < arr.length;j++)
        {
            if (obj[arr[j]] == undefined)
                obj[arr[j]] = 1;
            else
                obj[arr[j]] += 1;

        }
        let maxCount = 0;
        let maxEl = 0;
      for(k in obj)
      {
        if(obj[k]>maxCount)
        {
            maxCount = obj[k]
            maxEl = k;
        }
    }
        if (maxCount > arr.length / 2)
           console.log(maxEl);
        else
            console.log(-1);
       

       
    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    6
    1 1 1 1 2 3
    5
    1 1 2 2 3
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