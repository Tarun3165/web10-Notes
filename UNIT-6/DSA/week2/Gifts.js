function maxsubarrLength(arr) {
    let maxlength = 0;
    let subarr = [];
    for (let i = 0; i < arr.length;i++)
    {    
        while(contains(subarr,arr[i]))
        {
            subarr.shift();
        }
        subarr.push(arr[i])
      
        if (subarr.length > maxlength)
            maxlength = subarr.length;
    }  
    console.log(maxlength);
}

function contains(subarr, a) {
    for (let i = 0; i < subarr.length;i++)
    {
        if (subarr[i] == a)
            return true;
    }
    return false;
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[2*i].trim().split(" ").map(Number);
        maxsubarrLength(arr)
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