function countways(arr1, arr2)
{
  let arr = [];
  for (let i = 0; i < 10000;i++)
  {
    arr[i] = 0;
  }
  for (let i = 0; i <= arr1.length;i++)
  {
    arr[arr1[i]] = arr2[i];
  }


}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        let arr1 = newInput[i * 3 - 1].trim().split(" ").map(Number);
        let arr2 = newInput[i * 3].trim().split(" ").map(Number);
      countways(arr1, arr2);
        
        
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`2
      3
      99991 99994 99997
      3 3 3
      3
      1 4 7
      3 3 3
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