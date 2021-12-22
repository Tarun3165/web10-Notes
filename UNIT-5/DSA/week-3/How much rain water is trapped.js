
function trappedWater(arr) {
    let total=0
    for (let i = 1; i < arr.length - 1;i++)
    {
        let left = arr[i];
        for (let j = i - 1; j >= 0;j--)
        {
            if (arr[j] > left)
                left = arr[j];
        }
        let right=arr[i]
        for (let j = i + 1; j < arr.length;j++)
        {
            if (arr[j] > right)
                right = arr[j];
        }
        total += Math.min(left, right) - arr[i];
    }
    console.log(total);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr=newInput[i*2].trim().split(" ").map(Number)
        trappedWater(arr)
    }
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      5
      3 2 0 4 6
      7
      7 0 3 6 2 3 5
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