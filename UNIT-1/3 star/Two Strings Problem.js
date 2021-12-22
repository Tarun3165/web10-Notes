// 3 star
function runProgram(input) {
  
        var newInput = input.split("\n");
        var data1 = newInput[0].trim();
    var data2 = newInput[1].trim();
     
    var flag = 0;
    for (let j = 0; j < data1.length; j++) {
        for (let k = 0; k < data1.length; k++) {
            var temp = "";
            var a = j;
            var b = k;
              
            for (let i = a; i <= b; i++) {
                temp += data1[i];
            }
            if (temp == data2)
                flag = 1;
        
        }
    }
    if(flag==1)
    console.log("Yes");
    else
        console.log("No");
    
        
        //  using built in function
        //  if(data1.includes(data2))
        //     console.log("YES");
        //   else
        //    console.log("NO");
        
      }
     
   
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`masai
    sai`);
     
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
  