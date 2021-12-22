function AnagramCount(obj)
{
    let totalAnagrams = 0;
    for(k in obj)
    {
        let count = 0;
       count = obj[k];
        totalAnagrams += count * (count - 1) / 2;   //for N=6 => 5+4+3+2+1=> (N-1)*(N-1+1)/2=>(N-1)*N/2
    }
    console.log(totalAnagrams);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    let count = 1;
    
    for (let i = 1; i <= T;i++)
    {
        let obj = {};
        var N = +newInput[count].trim();
        count++;
        for (let j = count; j < count + N;j++)
        {
            var S = newInput[j].trim();
            S=S.split("").sort().join("")
            if (obj[S] == undefined)
                obj[S] = 1;
                else
                obj[S] += 1;
                
        }
        // console.log('obj:', obj)
        AnagramCount(obj)
        count += N;
       
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`2
      10
      aaaaabbbbb
      baabbbbaaa
      aaaabbbbba
      aaaabbbbba
      aaaabbbbba
      aaaabbbbba
      xxxxxxxxxy
      yxxxxxxxxx
      yxxxxxxxxx
      yxxxxxxxxx
      2
      abcdefghij
      jighdefabc
      
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