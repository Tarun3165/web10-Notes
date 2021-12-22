  

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var N = arr1[0];
    var M = arr1[1];
  var K = arr1[2];
  
  var arr2 = newInput[1].trim().split(" ").map(Number);
  var count = 0;
 
  for (let i = 1; i <= N;i++)   // for layer
  {
    
    for (let j = 1; j <= M;j++)  // for rows in layer
    {
      var temp = "";
      
      for (let l = 1; l <= K;l++)  // for columns in rows of the layer
      {  
        temp += arr2[count] + " ";
        count++;
        
      }
     
      console.log(temp);
    }
    
  }  
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2 2 2
    1 2 3 4 5 6 7 8
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
  