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
    
    var count = 0;
    for (let i = 0; i < N.length;i++)
    {
        if (N[i] == 1)
            count++;
       
    }
    
    return count; 
      
}

 
 

function runProgram(input) {
    
    var newInput = input.split("\n"); 
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
          var arr = newInput[2*i].trim().split(" ").map(Number);
        
        
            for (let j = 0; j < arr.length-1;j++)
            {
        
            for (let k = 0; k < arr.length - j - 1;k++)
            {
                var A1 = countSetBits(convertBinary(arr[k + 1]));
                var A2 = countSetBits(convertBinary(arr[k]));
                if (A1 < A2)
                {
                    var temp;
                    temp = arr[k + 1];
                    arr[k + 1] = arr[k];
                    arr[k] = temp;
                }
               else if (A1 == A2)
                {   if (arr[k+1] < arr[k])
                   {  var temp;
                     temp = arr[k + 1];
                     arr[k + 1] = arr[k];
                     arr[k] = temp;
                   }
                }
                

            }
        }
        console.log(arr.join(" "));
       
      }
     
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      6
      1 2 3 4 5 6
      
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
    