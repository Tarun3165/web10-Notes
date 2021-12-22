 
 var ans = -1;
 function  calculateGE(arr,low,high,K)
 {  
     if (low > high)
     { 
         return;
     }
     let mid = Math.floor((low + high)/ 2)
     if(arr[mid]>=K)
     {
       ans = mid;
       
       calculateGE(arr, low, mid-1, K);
      
     }
     else
     calculateGE(arr, mid + 1, high, K);
 
 }
  
   ans = -1;
 function  calculateG(arr,low,high,K)
 {  
     if (low > high)
     { 
         return;
     }
     let mid = Math.floor((low + high)/ 2)
     if(arr[mid]>K)
     {
       ans = mid;
       
       calculateG(arr, low, mid-1, K);
      
     }
     else
     calculateG(arr, mid + 1, high, K);
 
 }
 
 
 
 function runProgram(input) {
   
     var newInput = input.split("\n");
   var arr = newInput[1].trim().split(" ").map(Number);
   arr = arr.sort((a, b) => {
     return a - b;
   })
//    console.log(arr);
     var T = +newInput[2].trim();
     for (let i = 3; i <= T+2;i++)
     {
         ans = -1;
         var arr1 = newInput[i].trim().split(" ").map(Number);
         var A = arr1[0];
       var X = arr1[1];
     
  
       if(A==0)
       {
         calculateGE(arr, 0, arr.length-1, X)
         if (ans == -1)
         console.log(0);
         else
           console.log(arr.length-ans);
 
         }
         else if(A==1)
       {
         calculateG(arr, 0, arr.length-1, X)
         if (ans == -1)
           console.log (0);
           else
           console.log (arr.length-ans);
         }
     }
     
   }
   if (process.env.USERNAME === "TARUN RAWAT") {
     runProgram(`4
     1 2 3 4
     3
     1 3
     0 3
     0 5
      
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