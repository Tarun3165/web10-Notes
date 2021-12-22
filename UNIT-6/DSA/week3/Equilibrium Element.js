function EquilibriumElement(arr, N) {
    let left = [];
    left[0] = 0;
    let right = [];
    right[arr.length-1] = 0;
    let leftSum = 0;
    let rightSum = 0;
   
    for (let i = 1; i < arr.length;i++)
    {
        leftSum += arr[i-1];
        left[i] = leftSum;
    }
    for (let i = arr.length-2; i >=0;i--)
    {
        rightSum += arr[i+1];
        right[i] = rightSum;
    }
    for (let i = 0; i < arr.length;i++)
    {
        if(left[i]==right[i])
        {
            console.log(i + 1);
          
            return;
        }
    }
    console.log(-1);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var arr = newInput[1].trim().split(" ").map(Number);
    EquilibriumElement(arr, N);
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5
      3 3 3 2 1
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