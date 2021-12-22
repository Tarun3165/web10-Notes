 
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
    runProgram(`100
    39 107 162 225 51 126 38 -77 104 -89 245 157 72 179 -63 53 -12 244 138 -22 -38 28 -79 183 142 257 65 69 183 113 19 -80 40 148 16 30 -36 87 221 1 169 119 229 3 97 119 -38 29 134 226 79 238 -53 249 -50 -58 175 220 -40 106 139 188 -57 -96   101 18 39  101 18 39  101 18 39 -78 70 233 -73 218 3 229 248 95 139 137 60 1 258 53 -24 -10 -26 -100 -42 -53 196 220 -83 15 112 202 202 -87 14 17 -92 142 110 171 -84 187 191 68 29 143 -20 -46 28 78 77 97 87 172`);
     
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
  