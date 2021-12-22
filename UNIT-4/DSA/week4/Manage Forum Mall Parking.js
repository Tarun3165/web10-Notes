function runProgram(input) {
  
    var newInput = input.split("\n");
    var K = +newInput[0].trim()
    var arr1 = newInput[1].trim().split(" ").map(Number); 
    var arr2 = newInput[2].trim().split(" ").map(Number);
    let i = 0;
    let j = 0;
    let count = 0;
    let maxCount = 0;
    while(i<arr1.length&&j<arr2.length)
    {
       
        if (arr1[i]<arr2[j])
        { 
            count++
            if(count>maxCount)
            maxCount=count
            i++
        
        }
        else
        {
            count--
            j++;
        }
        // console.log(count)
    }

    if (maxCount > K)
        console.log("Not Possible")
    else
        console.log("Possible")
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    4 3 6 7 11
    9 4 10 9 14
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