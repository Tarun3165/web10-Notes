 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var day = newInput[0].trim();
    var N = +newInput[1].trim();
    var res;
    var temp;
    var obj={"Monday":0,"Tuesday":1,"Wednesday":2,"Thursday":3,"Friday":4,"Saturday":5,"Sunday":6}
     for(key in obj)
     {
         if(key==day)
         {
             res = (obj[key] + N) % 7;

         }
    }

     for(key in obj)
     {
         if(obj[key]==res)
         {
             temp = key;
             

         }
    }
    console.log(temp);
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`Wednesday
    8 
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
  