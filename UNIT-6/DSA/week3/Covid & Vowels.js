function substringwithVovels(S) {
    let counta=0
    let counti=0
    let counto=0
    let countu = 0
    let count = 0;
    for (let i = 0; i < S.length;i++)
    {
        for (let j = i; j < S.length; j++) {
          
            counta = 0;
            counti = 0;
            counto = 0;
            countu = 0;
          
            for (let k = i; k <= j; k++) {
                if (S[k] == "a")
                    counta++;
                else if (S[k] == "i")
                    counti++;
                else if (S[k] == "o")
                    counto++;
                else if (S[k] == "u")
                    countu++;
             

            }
            if (counta != 0 && counti != 0 && counto != 0 && countu != 0)
                count++;
        }
    }
    console.log(count);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var S = newInput[0].trim();
    substringwithVovels(S)
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`dangerouscovid
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