 
 
 

function runProgram(input) {
    var S = input;
    var temp = S[0];
    var stack = [];
    var count = 1;
    for (let i = 1; i < S.length;i++)
    {   
        if (S[i] == temp)
            count++;
        
        else
        {
           if(count%2==1)    
           {
               stack.push(temp)
           }
            temp = S[i];
            count = 1;
        }
    }
  
    if(count%2==1)    
    {
        stack.push(temp)
    }
    else
    {
        if (stack.length == 0)
           stack.push("Empty String")
    }
  
    console.log(stack.join(""));
   
  
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`aaaa`);
     
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
  