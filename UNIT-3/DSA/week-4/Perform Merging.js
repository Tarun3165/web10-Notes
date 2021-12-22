 
 
function merge(L,R)
{    
    var A = [];
    n1 = L.length ;
    n2 = R.length ;
    var i = 0;
    var j = 0;
    var k = 0;
    while (i <n1 && j < n2) {
        if (L[i]<=R[j]) {
            A[k] = L[i];
            i++;
        }
        else
        {
            A[k] = R[j];
            j++;
        }
        k++;
        
    }
    while (i<n1) {
        A[k] = L[i];
        i++;
        k++;
        
    }
    while (j<n2) {
        A[k] = R[j];
        j++;
        k++;

    }
   console.log(A.join(" "));
 }

function runProgram(input) {
  
  var newInput = input.split("\n");
    var arr1 = newInput[1].trim().split(" ").map(Number);
    var arr2 = newInput[2].trim().split(" ").map(Number);
    merge(arr1, arr2)
    
 
}
if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`4
  1 5 7 9
  2 4 6 8
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
