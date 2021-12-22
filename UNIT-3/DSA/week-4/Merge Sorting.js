 
function mergeSort(A, l, r)
{
  if(l<r)
  { 
    var m = Math.floor((l + r) / 2); 
    mergeSort(A, l, m);
    mergeSort(A, m + 1, r);
    merge(A, l, m, r);      // merging happens in the sotred arrays
  }
}
function merge(A, l, m, r)
{    
    var n1 = m - l+1;
    var n2 = r - m;
    var L = [];
    var R = [];
    for (let i = 0; i < n1;i++)
    {
        L[i] = A[l + i];
    }
    for (let j = 0; j < n2;j++)
    {
        R[j] = A[m + 1 + j];
    }
 
    var i = 0;
    var j = 0;
    var k = l;
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
  
 } 

function runProgram(input) {
  
  var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    mergeSort(arr, 0, arr.length - 1)
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
