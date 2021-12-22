function nearPalindrome(S,k) {
    let p1 = 0;
    let p2 = S.length - 1;

   
    let count = 0;
        while(p1<p2)
        {
            if (S[p1] == S[p2])
            {
                p1++;
                p2--;
            }
            else
            {
                count++;
                p1++;
                p2--;
                }
                
        }
    
    if(count<=k)
        console.log("True");
    else
        console.log("False");
    

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[2 * i - 1].trim().split(" ").map(Number);
        let k = arr[1];
        var S = newInput[2 * i].trim();
        nearPalindrome(S,k)
        
    }
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`2
      5 1
      abdca
      6 2
      abcdef
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