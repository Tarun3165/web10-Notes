 
 
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
   
  for (let i = 1; i <= T; i++) {
    
    var arr = newInput[i * 2].trim().split(" ").map(Number)
    var temp = "";
    var largest = -99999;
    for (let j = 0; j < arr.length;j++)
    {
      var flag = 0;
      for (let k = j-1; k >= 0;k--)
      {
        if (arr[k] >=largest&&arr[k]<0)
        {
          largest = arr[k]; 
          flag = 1;
          break;
        }
      }
      if (flag == 1)
      temp += largest + " ";
      else
      temp += 0 + " ";
      
    }
    console.log(temp);

  }

}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    5
    -2 -1 5 4 -3 
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
  