function findSubStrings(S, N)
{  
    let subsCount = 0;
    for (let i = 0; i < N;i++)
    {  
        for (let j = i; j < N;j++)
        {   
            let obj = {};
            let flag = 1;
            let count = 0;
            for (let k = i; k <= j;k++)
            {
                if (obj[S[k]] == undefined)
                    obj[S[k]] = 1;
                else
                    obj[S[k]] += 1;
                    
            }
            count++;
            for(key in obj)
            {  
                if (obj[key] > 2)
                {
                    flag = 0;
                    break;
                }
            }
            if (flag == 1)
                subsCount += count;
        }
    }
    console.log(subsCount);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[2*i-1].trim();
        var S = newInput[2 * i].trim();
        findSubStrings(S,N)

    }
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      5
      aabba
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