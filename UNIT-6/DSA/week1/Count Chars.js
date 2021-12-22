function countChar(S) {
    let count = 1;
    let temp = "";
    for (let i = 1; i < S.length;i++)
    {
        if (S[i] == S[i - 1])
            count++;
        else
        {
            temp += S[i-1] + count;
            count = 1;
        }
    }
    temp += S[S.length - 1] + count;
    console.log(temp);
    
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var S = newInput[0].trim();
        countChar(S);
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`aaabbbcccaaa
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