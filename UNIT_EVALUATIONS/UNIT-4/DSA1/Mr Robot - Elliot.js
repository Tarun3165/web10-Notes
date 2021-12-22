var ans = "";

function binarySearch(S, low, high)
{
    if (low > high)
    return;
  
    var mid = Math.floor((low + high) / 2);
    if(S[mid])
    ans += S[mid]; 
  S = S.split("");
  S[mid] = "";
  S=S.join("")
   
  
   
    binarySearch(S, low, high-1)
    
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
      ans = "";
        var S = newInput[i * 2].trim();
        binarySearch(S, 0, S.length-1)
        console.log(ans);

    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    3
    abc
    4
    abcd
    11
    abcdefghijk
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