 
 
 function convertBinary(n) {
    var binary = "";
  
     while(n)
      {
        rem = n % 2;
        binary = rem+binary;
       n = Math.floor(n / 2); 
    }
    // console.log(binary);
    return binary;
}
function countSetBits(N) {
    
    var count = 0;
    for (let i = 0; i < N.length;i++)
    {
        if (N[i] == 1)
            count++;
       
    }
    console.log(count);
    return count; 
      
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var t = +newInput[0].trim();
    for (let i = 1; i <= t; i++) {
        var N= +newInput[i].trim();
        var S = convertBinary(N);
        countSetBits(S);
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    1
    15
    2147483648 
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
  