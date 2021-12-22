 function DifferenceK(arr,N,K)    //time complexity will be O(N),  the space complexity will be O(1)
 {   //2 pointer approach
   var p1 = 0;
   var p2 = 0;

   while(p1<arr.length&&p2<arr.length)
   {
     if ((arr[p2] - arr[p1] == K)&&p1!=p2) {
       console.log("Yes");
       return;
     }
     else if (arr[p2] - arr[p1] < K) 
       p2++;
     else if (arr[p2] - arr[p1] > K)
       p1++;
     else if ((arr[p2] - arr[p1] == K)&&p1==p2)
       p2++;


   }
   console.log("No");
 }
  
 function DifferenceK1(arr,N,K)   //brute force   //time complexity will be O(N2), 
 {
   for (let i = N - 1; i >= 0;i--)
   {
     for (let j = 0; j <N-1;j++)
     {
       if(arr[i]-arr[j]==K)
       {
         console.log("Yes");
         return;
       }
     }
   }
   console.log("No");
 }
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[i * 2 - 1].trim().split(" ").map(Number);
        var N = arr1[0];
        var K = arr1[1];
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        DifferenceK(arr, N, K);
    }
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    1 5
    3
    6 0
    -8 -7 5 6 6 9
    1 4
    -3
    2 6
    -2 1
    3 3
    -5 -3 0
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
  