 
var flag = false;
 function fun(temp,arr,low,high,S)
 {     //console.log(temp);
   if (temp == S)
    {
     flag = true;
     return;
    }
     for (let i = low; i < high;i++)
     {  
         fun(temp + arr[i], arr, i + 1, high, S);

     }
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    var S = +newInput[2].trim();
    
  fun(0, arr, 0, arr.length, S);
  
    if(flag==true)
    console.log("yes");
    else
        console.log("no");
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    1 2 3 4 
    5 
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
  