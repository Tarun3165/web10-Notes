var count = 0;
function NQueen(chess, row) {
   
  if (row >= chess.length) {
    // console.log(chess);
    count++;
    return;
  }

  for (let col = 0; col < chess.length; col++) {
    if (isQueenSafe(chess, row, col)) {
      chess[row][col] = 1;
      NQueen(chess, row + 1);
      chess[row][col] = 0;
    }
  }
}

function isQueenSafe(chess, row, col) {
  //vertical
  for (i = row - 1,j=col; i >= 0; i--) {
    if (chess[i][j] == 1) {
      return false;
    }
  }
  //left diag
  for (i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chess[i][j] == 1) {
      return false;
    }
  }
  //right diag
  for (i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
    if (chess[i][j] == 1) {
      return false;
    }
  }

  return true;
}

function runProgram(input) {
  var newInput = input.split("\n");
  var N = +newInput[0].trim();
  var chess = [];
  for (let i = 0; i < N;i++)
  {
    var arr = [];
    for (let j = 0; j < N;j++)
    {
      arr[j] = 0;
    }
    chess.push(arr);
  }
  
 
  NQueen(chess, 0);

  console.log(count);
}
if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`4
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
