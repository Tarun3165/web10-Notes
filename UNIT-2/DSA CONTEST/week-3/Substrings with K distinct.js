 function checksubstring(S,N,K)   //time complexity would be O(N^2). the space complexity would be O(M), due to key value pairs
 { 
  var p1 = 0;
  var p2 = K - 1;
  var countSubstring = 0;
  while (p2 < N)     // using sliding window concept and objects
  {
     var obj = {};
 
     for (let i = p1; i <= p2; i++) {
       obj[S[i]] = S[i];
     }
      
     if (Object.keys(obj).length == K)
       {countSubstring++; }
     p1++;
     p2++;
   }
   console.log(countSubstring);
 
 
// console.log('Object.keys(obj).length:', Object.keys(obj).length)
}
 
 function checksubstring1(S,N,K)
 {
  var p1 = 0;
  var p2 = K - 1;
  var count = 0;
  
   while(p2<N)     // using sliding window concept
   {
     var flag = 1;
     for (let i = p1; i <= p2;i++)
     {
       for (let j = i + 1; j <= p2;j++)
       { 
         if(S[i]==S[j])
         {
           flag = 0;
           break;
         }
       }
       if(flag==0)
       break;
     }
     if(flag==1)
     count++;
     p1++;
     p2++;
  }
  console.log(count);

 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var S = newInput[1].trim();
    var N = arr1[0];
    var K = arr1[1];
  checksubstring(S, N, K);
   
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4 2
    abcc 
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
  