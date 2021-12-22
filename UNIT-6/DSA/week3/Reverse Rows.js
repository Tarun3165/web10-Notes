function reverseRow(matrix, N) {
    for (let i = 0; i < N;i++)
    {
        let temp = "";
        for(let j = N - 1; j >= 0;j--)
        {
            temp += matrix[i][j]+" ";
        }
        console.log(temp);
    }
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    let matrix = [];
    for (let i = 1; i <= N;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        matrix.push(arr);

    }
    reverseRow(matrix,N)
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`4
      1 2 3 4
      1 2 3 4
      1 2 3 4
      1 2 3 4
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