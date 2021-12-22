// 4 star question

function checkCorona(str) {
  var countCorona = 1;
  var count = 0;
  for (let i = 0; i < str.length;i++)
  {
    if(str[i]==1)
    {
      for (let j = i+1; j < str.length;j++)
      {
        if (str[j] == 0)
          count++;
        else
        {  
          if (count < 5)
         { countCorona++;
            count = 0;
          }
          else {
            count = 0;
          }
        }
        
      }
      
      break;
    }
  }
  if (countCorona == 1)
    countCorona = 0;
  console.log(countCorona);

}

 
function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    for (let i = 1; i <= T;i++)
    {
        var str = newInput[i].trim();
     
        checkCorona(str); 
    }
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    101
    1000110111
    10000001010001
    11`);
     
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
  