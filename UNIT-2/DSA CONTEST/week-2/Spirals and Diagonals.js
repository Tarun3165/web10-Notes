// **Time Complexity** :    O(n^2) per testcase.
//  **Space Complexity** :  O(n^2) per testcase.
function matrix1(arr, n)
{
  var count = 0;
  var matrix = [];
  for (let i = 0; i < n;i++)
  {
    var arr1 = [];
    for (let i = 0; i < n; i++)
    {
      arr1.push(arr[count]);
      count++;
    }
    matrix.push(arr1)

  }
   
  actualMartix(matrix, arr, n);
   

}

function actualMartix(matrix,arr,n)
{
 
 var top = 0;
 var bottom = n - 1;
 var left = 0;
 var right = n - 1;
 var count = 0;
 
   while (count<n*n)
   { 
       for (let i = left; i <= right&&count<n*n; i++)
     {
       matrix[top][i] = arr[count];
       count++;
   
     }
     top++;
     
     for (let i = top; i <= bottom&&count<n*n; i++)
     {
       matrix[i][right] = arr[count];
       count++;
   
     }
     right--;
     
     for (let i = right; i >=left &&count<n*n; i--)
     {
       matrix[bottom][i] = arr[count];
       count++;
   
     }
     bottom--;
     
     for (let i = bottom; i >=top &&count<n*n; i--)
     {
       matrix[i][left] = arr[count];
       count++;
       
     }
     left++;
 
 }
 // console.log(matrix);
 sumDiagonals(matrix, n); 

}

function sumDiagonals(matrix,n)
{  
 var sum = 0;
 for (let i = 0; i < n;i++)
 {
   for (let j = 0; j < n;j++)
   {
     if(i==j ||i+j==n-1)
     {
       sum += matrix[i][j];
     }
   }
 }
  
 console.log(sum);
}

function runProgram(input) {
 
   var newInput = input.split("\n");
   var T = newInput[0].trim(0).split(" ").map(Number);

   for (let i = 1; i <= T;i++)
   {
     var n = +newInput[2*i-1];
     var arr = newInput[2 * i].trim().split(" ").map(Number);
      matrix1(arr,n);
    
     
   } 
    
}
 
 if (process.env.USERNAME === "TARUN RAWAT") {
   runProgram(`1
   4
   1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
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
 