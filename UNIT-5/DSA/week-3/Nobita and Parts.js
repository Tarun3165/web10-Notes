function str(L, R, S) {
    let temp = "";
    for (let i = R; i >=L;i--)
    {
        temp += S[i];
    }
    let temp1 = "";
    for (let i = 0; i < L;i++)
    {
        temp1 += S[i];
    }
    let temp2 = "";
    for (let i = R + 1; i < S.length - 1;i++)
    {
        temp2 += S[i];
    }
    console.log(temp2);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim().split(" ").map(Number);
    let K = T[1];
    let S = newInput[1];
    for (let i = 2; i < K + 2;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        let L = arr[0];
        let R = arr[1];
        str(L,R,S)

    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`6 2
      abcdfg
      0 3
      2 5
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