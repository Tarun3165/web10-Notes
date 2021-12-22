function DetectPalindrome(S) {
    let obj = {};
    let count = 0;
    for (let i = 0; i < S.length;i++)
    {
        if (obj[S[i]] == undefined)
            obj[S[i]] = 1;
        else
            obj[S[i]] += 1;
        
    }
    for(let k in obj)
    { 
        if (obj[k] % 2 == 1)
            count++;
    }
    if (S.length % 2 == 1 && count != 1)
        console.log("Not Possible!");
    else if(S.length % 2 == 0 && count != 0)
        console.log("Not Possible!");
    else
        console.log("Possible!");
    


    
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var S = newInput[2*i].trim();
      DetectPalindrome(S)

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