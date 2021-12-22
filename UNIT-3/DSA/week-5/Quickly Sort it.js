 
function quickSort(A, p, r)
{  
    
   if(p<r)
   {
       var q = partition(A, p, r);
       quickSort(A, p, q - 1);
       quickSort(A, q+1,r);
       
   }
    
}
 function partition(A,p,r)
 {  
     var x = A[r];
     var i =p-1;
    
     
     for (let j = p; j < r;j++)
     {
         if (A[j] <= x)
         {
             i++;
             var temp = A[j];
             A[j] = A[i];
             A[i] = temp;
         }

     }
     var temp = A[i + 1];
     A[i + 1] = A[r];
     A[r] = temp;
     return i+1;

 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    quickSort(arr, 0, arr.length - 1);
    
    console.log(arr.join(" "));
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    3 5 0 9 8 
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
  