function traverse(matrix, N) {
    let temp = "";
    let top = 0;
    let left = 0;
    let right = N - 1;
    let bottom = N - 1;
    let total = N * N;
    let count = 0;
    while (top < N && left<N && right>=0 && bottom >=0 && count<=total)
    {
        for (let i = left; i <= right && count <= total;i++)
        {
            temp += matrix[top][i]+" ";
            count++
        }
        top++;

        for (let i = top; i <= bottom && count <= total;i++)
        {
            temp += matrix[i][right]+" ";
            count++
        }
        right--;

        for (let i = right; i >= left && count <= total;i--)
        {
            temp += matrix[bottom][i]+" ";
            count++
        }
        bottom--;

        for (let i = bottom; i >= top && count <= total;i--)
        {
            temp += matrix[i][left]+" ";
            count++
        }
        left++;
    }
    return temp;

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = newInput[0].trim();
    const matrix = [];
    for (let i = 1; i <= N;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number); 
        matrix.push(arr)

    }
    let x = traverse(matrix, N)
    console.log(x);
    
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    1 2 3 4
    5 6 7 8
    1 2 3 4
    5 6 7 8
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