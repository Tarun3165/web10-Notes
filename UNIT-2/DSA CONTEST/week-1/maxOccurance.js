 

function runProgram(input) {
  
  var newInput = input.split("\n");
  var N = +newInput[0].trim();
  var arr = newInput[1].trim().split(" ").map(String);
 
  var maxE=0;    // element with max count
  var maxC = 0;   // max count
  
  var object = {
    
  }; 
  
  for (let i = 0; i < arr.length;i++)
  {
      if (object[arr[i]] == undefined)
          object[arr[i]] = 1;   // unique elements
      else
          object[arr[i]] +=1 ;  // duplicate elements
  }
  // console.log(object);
  for(k in object)
  {
    if (object[k] > maxC)
    {
      maxC = object[k];
      maxE = k;
    }
  }
   
  console.log(maxE);
}
  
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    0 2 6 6 0 9
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
      runProgram(read);29033
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  