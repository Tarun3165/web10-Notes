
function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var S = newInput[1].trim();
    S = S.split("").sort().join("");
    let obj = {};
    for (let i = 0; i < S.length;i++)
    {
        if (obj[S[i]] == undefined)
            obj[S[i]] = 1;
            else
            obj[S[i]] += 1;
            
    }
    for(key in obj)
    {
        console.log(key+"-"+obj[key]);
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`4
      aman
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