function repeatedAMissing(arr){
  let obj = {};
   for (let i = 0; i < arr.length;i++)
    {
        if (obj[arr[i]] == undefined)
         obj[arr[i]] = 1;
        else
         obj[arr[i]] += 1;
  }
  
  let repeated = 0;
  for(k in obj)
  {
    if (obj[k] == 2)
      repeated = k;
  }

    let sum = 0;
    let actualSum = arr.length*(arr.length + 1) / 2;
    let missing = 0;
    let flag = 0;
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] != i + 1 && flag==0)
        {
            repeated = arr[i];
            flag = 1;
        }
        sum += arr[i];
    }
    missing = actualSum - (sum - repeated);
    console.log(missing,repeated);
    
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[2*i].trim().split(" ").map(Number);
        repeatedAMissing(arr)

    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`3
      5
      1 2 3 3 4
      2
      1 1
      3
      1 2 2
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