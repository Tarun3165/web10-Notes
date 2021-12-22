 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);
    var N = arr1[0];
    var K = arr1[1];
    var arr = newInput[1].trim().split(" ").map(Number);
    var K_place = 0;
    var count = 0;
    for (let i = 0; i < N;i++)
    {
        if (i == K-1)
        {
            K_place = arr[i];
            break;
            }
        }
        // console.log(K_place,K);      
 
    for (let i = 0; i < N;i++)
    {
        if (arr[i] >= K_place&&arr[i]>0)
            count++;
    }
    console.log(count);

     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4 2
    0 0 0 0
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
  