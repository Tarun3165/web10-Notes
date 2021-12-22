function stringCompression(S) {
  S = S.split("");
  for (let i = 0; i < S.length;i++)
  {  
    if (S[i] != S[i + 1] && i == 0)
    {
      S[i + 1] = "";
    }
     if (S[i] != S[i - 1] && i == S.length-1)
    {
      S[i - 1] = "";
    }
    if (S[i-1] != S[i + 1])
    {
      S[i - 1] = "";
      S[i + 1] = "";
    }
  }
  console.log(S);
  S = S.join("");
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
      let S = newInput[i * 2].trim();
      stringCompression(S)
       
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      5
      11000
      6
      100001
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