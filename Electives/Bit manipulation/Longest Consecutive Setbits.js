function convertBinary(n) {
    var binary = "";
    if (n == 0)
    {
        binary = "0"
        return binary;
    }
     while(n)
      {
        rem = n % 2;
        binary = rem+binary;
       n = Math.floor(n / 2);
      
    }
    // console.log(binary );
    return binary;
  }
   
function countSetBits(N) {
    var longest = 0;
    var count = 0;
    for (let i = 0; i < N.length;i++)
    {
        if (N[i] == "1")
            count++;
        else
        {
            if (count > longest)
            longest = count;
            count = 0;
        }

    }
    if (count > longest)
        longest = count;
    console.log(longest);
      
  }
   
  
  function runProgram(input) {
    
    var newInput = input.split("\n"); 
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
      var n = +newInput[i].trim();
        
        countSetBits(convertBinary(n))
       
       
      }
     
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`4
      1
      0
      4294967295
      13
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
    