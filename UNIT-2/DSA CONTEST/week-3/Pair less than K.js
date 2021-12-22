 
 function maximumS(arr,N,K)   // 2pointer approach
 {    
      arr = arr.sort(function (a,b) {
        return a - b;
      })
   

   p1 = 0;
   p2 = N - 1;
   largest = -1;
   while(p1<p2)
   {
     if (arr[p2] + arr[p1] < K)
     {
       if (arr[p2] + arr[p1] > largest)
         largest = arr[p2] + arr[p1];
       p1++;
       
     }
     else if (arr[p2] + arr[p1] >= K)
       p2--;

   }
   console.log(largest);
 }
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    var count = 1;
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[count].trim();
        count++;
        var arr = newInput[count].trim().split(" ").map(Number);
        count++
        var K = +newInput[count].trim();
        count++
         
        maximumS(arr, N, K);
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15 
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
  