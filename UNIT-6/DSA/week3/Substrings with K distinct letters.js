function distinctSubstring(S, K) {
    let count = 0;
    let p1 = 0;
    let p2 = K - 1;
    while(p2<S.length)
    {
        let set = new Set;
        for (let i = p1; i <= p2;i++)
        {
            set.add(S[i]);
        }
        if(set.size==K)
        {
            count++;
        }
        p1++;
        p2++;

    }
    console.log(count);
     
   
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[0].trim().split(" ").map(Number);
    let K = arr[1];
    var S = newInput[1].trim();
    distinctSubstring(S,K)
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`11 3
      aabcdabbcdc`);
       
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