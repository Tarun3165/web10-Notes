

// function maxVal(arr, N) {  //bruteforce
//     let max = 0;
//     let diff = 0;
//     for (let i = 0; i < N;i++)
//     {
//         for (let j = i+1; j < N;j++)
//         {
//             if (arr[i] == arr[j])
//             {
//                 diff = j - i;
//                 if (diff > max)
//                     max = diff;
//             }
//         }
//     }
//     console.log(max);
// }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[2 * i - 1].trim();
       
        var arr = newInput[2 * i ].trim().split(" ").map(Number);
        maxVal(arr, N)

    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`2
      5
      1 1 1 1 1
      5
      2 1 2 1 1
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