function minCoins(N) {
    
    let coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000]
    coins = coins.sort((a, b) => {
        return b - a;
    })
    let notes = 0;
    for (let i = 0; i < coins.length; i++) {
        while (coins[i] <= N) {
            notes++;
            N = N - coins[i];
        }
        
    }
    console.log(notes);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[i].trim();
        minCoins(N)
    }

    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    45
    93
    29
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