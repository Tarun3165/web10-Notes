function checkGroups(arr)
{ 
    var countGroups = 0;
    for (let i = 0; i < arr.length;i++)
    {
       if (arr[i] < arr[i + 1]) 
            continue;
        else
        {
            countGroups++;
            
            }

    }
    console.log(countGroups);

}


function runProgram(input) {
  
    var newInput = input.split("\n");
    
    var arr =  newInput[1].trim().split(" ").map(Number);
    checkGroups(arr);
      
   
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`6
    1 2 4 3 5 2 8`);
     
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
  