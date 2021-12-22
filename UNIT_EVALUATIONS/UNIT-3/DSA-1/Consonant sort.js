 
 function startWithConsonant(S)
 {
   if (S[0] != "a" && S[0] != "e" && S[0] != "i" && S[0] != "o" && S[0] != "u" )
     return true;
   else
     return false;
 }
 
function sort(arr)
{
   
  for(let i = 0; i < arr.length;i++)
  {
    if (startWithConsonant(arr[i]))
      console.log(arr[i]);
  }
  for(let i = 0; i < arr.length;i++)
  {
    if (!startWithConsonant(arr[i]))
    console.log(arr[i]);
     
  }
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    var count = 1;
    for (let i = 1; i <= T;i++)
    {
        var newArr = [];
        var arr = newInput[count].trim().split(" ").map(Number);
        count++;
        var N = arr[0];
        var M = arr[1];
        for (let j = count; j < N+count;j++)
        {
            var S = newInput[j].trim();
            newArr.push(S);
        }
       sort(newArr)
        count += N;
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    4 4
    ebcd
    fghr
    aaaa
    bbbb 
     
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
  