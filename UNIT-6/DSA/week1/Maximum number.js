function maxNum(S) {
    S = S.split("").sort().reverse().join("");
    let last;
    let temp = "";
    let sum = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] % 2 == 0 && S[i] % 5 == 0)
            last = S[i];
        sum += Number(S[i]);
    }
    
    let diff = 0;
    if (sum % 3 != 0)
        diff = sum % 3;
    for (let i = 0; i < S.length; i++) {
        if (S[i] == diff || S[i] == last)
            continue;
        else
            temp += S[i];
    }
    console.log(temp + last);
}


function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        
        var S = newInput[i].trim();
    
        maxNum(S)
    }
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`2
      1230
      11230
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