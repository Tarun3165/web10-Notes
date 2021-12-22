function suchpairsReturns(arr, K, N) {
    let p1 = 0;
    let p2 = N - 1;
    arr = arr.sort((a, b) => {
        return a - b;
    })

    while(p1<p2)
    {
        if (arr[p1] + arr[p2] == K) {
            console.log(1);
            return;
        }
        else if (arr[p1] + arr[p2] < K)
            p1++;
        else
            p2--;
    }
    console.log(-1);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[2 * i - 1].trim().split(" ").map(Number);
        let N = arr1[0];
        let K = arr1[1];
        var arr = newInput[2 * i].trim().split(" ").map(Number);
        suchpairsReturns(arr,K,N)

    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      5 2
      3 4 1 2 7
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