function detectPalindrome(S, N) {
    let obj = {};
    for (let i = 0; i < N; i++) {
        if (obj[S[i]] == undefined)
            obj[S[i]] = 1;
        else
            obj[S[i]] += 1;
            
    }
    let count = 0;
    for (k in obj) {
        if (obj[k] % 2 == 1)
            count++;
    }
   
    if (N % 2 == 1 && count == 1 || N % 2 == 0 && count == 0) {
        console.log("Possible!");
        return;
    }
    else {
        console.log("Not Possible!");
        return;
    
    }
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[2*i-1].trim();
        var S = newInput[2*i].trim();
        detectPalindrome(S,N)
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`2
      6
      aabbcc
      5
      aabcd
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