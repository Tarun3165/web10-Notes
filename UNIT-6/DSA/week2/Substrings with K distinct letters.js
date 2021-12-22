function countDistinctSubstr(S, K) {
  
    let count = 0;
    for (let i = 1; i <= S.length;i++)
    {
        let p1 = 0;
        let p2 = i;
        while(p2<=S.length )
        {
           
            let temp = "";
            for (let j = p1; j < p2; j++)
            {
                temp += S[j];
            }
            let set = new Set(temp);
            
            if(temp.length==K && set.size==K)
            {  
                // console.log('set:', set)
                count++;
            }
            p1++;
            p2++;
        }
    }  
    
    console.log(count);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[0].trim().split(" ").map(Number);
    let K = arr[1];
    var S = newInput[1].trim();
    countDistinctSubstr(S,K)
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`4 2
      abcc
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