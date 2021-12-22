function stringCut(arr)
{
 
  result = "";
   
   // for (let i = Math.floor((arr.length/2)-1),j=0; i >=0,j<=Math.floor((arr.length/2)-1);i--,j++)
   for (let i = Math.floor(arr.length/2-1)  ; i >=0 ;i-- )
    {   
      result+= arr[i]; 
  
  }
  if(arr.length%2!=0)
  {  var n=Math.floor(arr.length/2)
    result += arr[n];
  }
    for (let i =arr.length-1; i >=Math.ceil(arr.length/2) ;i-- )
    {   
      result+= arr[i]; 
  
  }
  console.log(result);
     

}

function runProgram(input) {
  
    var data = input;
       stringCut(data);

  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`abcdxyz`);
     
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
  