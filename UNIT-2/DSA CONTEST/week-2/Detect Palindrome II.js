 
function makePalindrome(S)
{
    var obj = {};
    

    for (let i = 0; i < S.length;i++)
    {  
      if(obj[S[i]]==undefined)
      {
         obj[S[i]]= 1;
      }
      else
      obj[S[i]] += 1; 
        
    }
    var count = 0;
    for(key in obj)
    {
        if(obj[key]%2==1)
        {
            count++; 
        }
    }
    if(count>1)
        console.log("Not Possible!");
    else
    console.log("Possible!");
    
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0];
    for (let i = 1; i <= T;i++)
    {
        var S = newInput[i * 2].trim().split("") ;
        makePalindrome(S);
        // console.log(S);
        
    }
     
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    6
    aabbcc
    5
    aabbi 
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
      runProgram(read);29033
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  