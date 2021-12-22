function anagramPairs(arr) {
    let obj = {};
    for (let i = 0; i < arr.length;i++)
    {
        if (obj[arr[i]] == undefined)
         obj[arr[i]] = 1;
        else
         obj[arr[i]] += 1;
    }
    let total = 0;
    for(k in obj)
    {
        total += obj[k] * (obj[k] - 1) / 2;
    }
    console.log(total);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    let count = 1;
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[count].trim();
        count++;
        let arr = [];
        for (let j = count; j < count + N;j++)
        {
            var S = newInput[j].trim().split("").sort().join("");
            arr.push(S);
        }
        anagramPairs(arr);
        count += N;
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`2
      5
      aaaaabbbbb
      baabbbbaaa
      aaaabbbbba
      xxxxxxxxxy
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