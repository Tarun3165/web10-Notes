
function runProgram(input) {   //T.C=O(N)+O(K)*O(N)=O(N*N)
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var arr = newInput[1].trim().split(" ").map(Number);
    var q = +newInput[2].trim();
    var qarr = newInput[3].trim().split(" ").map(Number);
    let S = new Set;
    for (let i = 0; i < arr.length;i++)
    {
        S.add(arr[i]);
    }

    for (let i = 0; i < qarr.length;i++)
    {
        if(S.has(qarr[i]))   //assuming S.has() takes O(N)
        console.log("YES");
        else
            console.log("NO");
    }
    

  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5
      1 2 3 4 5
      3
      3 5 7
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