 
function recursiveSort(arr,a,b,c)
{  
  if(arr[c]<arr[b])
  { 
    let temp = arr[b];
    arr[b] = arr[c];
    arr[c] = temp;
  }
  if(c>=arr.length-a-1)
  {
    a++;
    b = 0;
    c = b + 1;
  }
  else {
    
    b++;
    c++;
  }
  
  if (a == arr.length - 2)
  { return  ;
     
  }
  recursiveSort(arr, a, b, c);
}
 
 

function runProgram(input) {
  
  var newInput = input.split("\n");
  var arr = newInput[1].trim().split(" ").map(Number)
  
  recursiveSort(arr, 0, 0, 1);
  
   console.log(arr.join(" "));
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`34
    -17 11 -11 -27 -22 41 0 -27 -43 -15 27 7 -49 12 45 48 -45 -25 45 -32 -29 -18 -16 -48 -20 -46 3 -41 -43 -7 -39 -34 -17 -19
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
  