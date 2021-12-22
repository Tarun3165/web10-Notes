function largest(arr) {
    arr = arr.sort((a, b) => {
        return a-b;
    })
    let p1 = 0;
    let p2 = arr.length - 1;
    while (p1 < p2)
    {
        if (Math.abs(arr[p1]) == Math.abs(arr[p2]) && arr[p1]!=arr[p2] ){
            console.log(arr[p2]);
            return;
        }
        else if (Math.abs(arr[p1]) > Math.abs(arr[p2]))
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
        var arr = newInput[2*i].trim().split(" ").map(Number);
        largest(arr)

    }
    
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5
      8
      10 5 -7 2 -10 -4 6 7
      1
      -3
      2
      1 1
      10
      1 -3 2 1 -2 3 -1 -1 -2 -3
      8
      -6 7 6 3 1 -2 2 -5
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