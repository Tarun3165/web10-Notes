 
 
function subSet(temp,S,low,N)
{  if(temp.length==0)
  console.log("");
  else
  console.log(temp);
  for (let i = low; i < N;i++)
  { if(temp.length==0)
    subSet(temp + S[i], S, i + 1, N)
    else
    subSet(temp+" "+S[i],S,i+1,N)
  }
}

function runProgram(input) {
  
  var newInput = input.split("\n");
  var S = [];
  var N = +newInput[0].trim();
  for (let i = 1; i <= N;i++)
  {
    S.push(i);
  }
    subSet("",S,0,N);
  
  
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
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
  