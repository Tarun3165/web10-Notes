// 4 star question

function runProgram(input) {
    var S = input;
    var maxLength = 0;
    
    for (let i = 0; i < S.length;i++)
    {
        for (let j = i; j<S.length;j++)
        {
            var temp = "";
            for (let k = i; k <= j;k++)
            {   
                temp += S[k]; 
            }
            checkPalindrome(temp); 
        }
  }
  
    function checkPalindrome(temp){
 
    var str = temp.split("").reverse().join(""); 
      if (str == temp) {
         
        if (str.length > maxLength)
          maxLength = str.length 
        } 
        
    }
    console.log(maxLength);
  }

  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`thisracecarisgood`);
     
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
  