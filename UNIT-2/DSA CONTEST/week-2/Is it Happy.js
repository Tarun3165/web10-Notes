function isHappy(N) {    // using key value pairs
  
  var count = 0;
  var obj = {};
 
  while( N!=1)    
  {
    
    var sum = 0;
    for (let i = 0; i < N.length;i++)
    { 
      sum+=N[i]**2;
    }
    N = String(sum);

    if(obj[N]==undefined)
    {
      obj[N] = 1;
    }
    else
    { 
      console.log("false");
      return;
    } 
      
  }
  if (N == 1)
  { 
    console.log("true");
    return;
  }
  
}
 
function isHappy1(N) {
  
  var count = 0;
 
  while( count<30 && N!=1)    // assumed count<30 
  {
    count++;
    var sum = 0;
    for (let i = 0; i < N.length;i++)
    { 
      sum+=N[i]**2;
    }
    N = String(sum); 
  }
  if (N == 1)
  {
    console.log("true");
    return;
  }
  else
    console.log("false");
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
   
    for (let i = 1; i <= T;i++)
    {
        var N = newInput[i].trim();     // N in string format
        isHappy(N);  
    }
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4   
    927947038 
    149879080
    238974901
    437337811
    411318638
    648081253
    189862153 
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
  