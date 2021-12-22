function checkPalindrome(S) {
    let p1 = 0;
    let p2 = S.length - 1;
    let flag = 1;
    while(p1<=p2)
    {
        if (S[p1] != S[p2])
        {
            flag = 0;
            break;
        }
        else
        {
            p1++;
            p2--;
            }
    }
    if(flag==0)
    console.log("No");
    else
        console.log("Yes");
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var S = newInput[1].trim();
    checkPalindrome(S)
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`6
      sas
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