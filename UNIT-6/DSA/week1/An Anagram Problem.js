let arr = [];
function arrContains(S) {
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i].split("").sort().join("") == S)
            return true;
    }
    return false;
   
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    
    for (let i = 1; i <= T;i++)
    {
        var S = newInput[i].trim();
        if(!arrContains(S.split("").sort().join("")))
        arr.push(S)

    }
    arr = arr.sort();
    console.log(arr.length);
    for (let i = 0; i < arr.length;i++)
    {
        console.log(arr[i]);
    }
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5
      eodc
      odec
      code
      baca
      aabc
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