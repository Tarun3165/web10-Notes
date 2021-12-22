function sumExists(arr, K) {
   
    let sum = 0;
    for (let i = 0; i < arr.length;i++)
    {   
        sum = arr[i];
        if(sum==K)
        {
            console.log("yes");
            return;
        }
        for (let j = i + 1; j < arr.length;j++)
        {
            sum += arr[j];
            if(sum==K)
            {
                console.log("yes");
                return;
            }

        }
    }
    console.log("no");
    
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var arr = newInput[1].trim().split(" ").map(Number);
    var K = +newInput[2].trim();
    sumExists(arr,K)
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`9
      1 3 2 7 8 9
      5
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