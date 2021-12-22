 
// 2 pointer approach . Given sorted array
function findIndexes1(arr, N, B)   //time complexity is O(N)  //space complexity will be O(1)
{
   var left = 0;
  var right = N - 1;
  var flag = false;
   while(left<right)
   {
     if (arr[left] + arr[right] == B) {
       console.log(left, right);
       flag = true;
       break;
     }
     else if (arr[left] + arr[right] > B)
       right--;
     else if (arr[left] + arr[right] < B)
       left++;
  }

  if(flag==false)
  console.log(-1, -1);
     
}
 
// brute force approach  // 1st index has to be smaller then the 2nd
// time complexity-O(N2);
 function findIndexes(arr,N,B)
 {
     var a = N-1;
     var b = N-1;
     for (i = 0; i < N;i++)
     {
         for (let j = i + 1; j < N;j++)
         {
             if(arr[i]+arr[j]==B)
             {    
                 if (i < a )
                { a = i;
                     b = j;
                 }
             }
         }
     }
     if(a==N-1&&b==N-1)
         console.log(-1, -1);
     else
         console.log(a,b);
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
     
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr1=newInput[i*2-1].trim().split(" "). map(Number);
        var N = arr1[0];
        var B = arr1[1];
        var arr = newInput[i*2].trim().split(" "). map(Number);
        findIndexes1(arr, N, B);
        
    }
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    32 49
2 12 18 28 32 40 49 50 57 63 70 77 83 92 97 101 107 113 121 124 132 137 146 152 154 160 170 172 180 186 189 196
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
  