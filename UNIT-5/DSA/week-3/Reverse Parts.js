function reversePart(S, L, R) {
    let p1 = L;
    let p2 = R;
    while (p1<p2)
    {
        // swap(arr[p1], arr[p2]);
        let temp = S[p1];
        S[p1] = S[p2];
        S[p2] = temp;
        p1++;
        p2--
    }
    console.log(S.join(""));
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var S = newInput[1].trim().split("");
    var arr = newInput[2].trim().split(" ").map(Number);
    let L = arr[0];
    let R = arr[1];
   
    reversePart(S,L,R)
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`8
      fxavixem
      0 1
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