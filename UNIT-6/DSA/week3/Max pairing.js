function maxPairing(arr1, arr2) {
    let obj = {};
    for (let i = 0; i < arr2.length; i++) {
        if (obj[arr2[i]] == undefined)
            obj[arr2[i]] = 1;
        else
            obj[arr2[i]] += 1;
            
    }
    let count = 0;
    for (let i = 0; i < arr1.length;i++)
    {
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= 1 && obj[arr2[j]]>0)
            {
                obj[arr2[j]] -= 1;
                count++;
                break;
            }
        }
        
    }
    console.log(count);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[1].trim().split(" ").map(Number);
    var arr2 = newInput[2].trim().split(" ").map(Number);
    maxPairing(arr1,arr2)
    
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`4 4
      1 2 3 4
      10 11 12 13
      
      
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