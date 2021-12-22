 // 4 star question

function runProgram(input) {
  var str = input;
  
  var temp = str[0]; 
  var result = ""; 
  var count = 1;
  var maxCount = 0;
 
  for (let i = 1; i < str.length;i++)
  {
      if (str[i-1] == str[i])
      { 
        count++;
        temp +=str[i];
      }

      else { 
        count = 1;
        temp=str[i];
      }
    
      if(count>maxCount)
      {
        maxCount = count;
        result = temp; 
      } 
  } 
    console.log(result); 
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`ATTBCCGGG`);
     
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
  