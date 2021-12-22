// 3star question

function runProgram(input) {
  var N = Number(input);
  for (let i = 1; i <= N; i++) {
    var temp = "";
    for (let j = 1; j <= N; j++) {
      temp += " ";
    }

    for (let k = 1; k <= 1; k++) {
      temp += "*";
    }
    console.log(temp);
  }

  var temp = "";
  for (let l = 1; l <= 2 * N + 1; l++) {
    temp += "*";
  }
  console.log(temp);

  for (let i = 1; i <= N; i++) {
    var temp = "";
    for (let j = 1; j <= N; j++) {
      temp += " ";
    }

    for (let k = 1; k <= 1; k++) {
      temp += "*";
    }
    console.log(temp);
  }
}
if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`2`);
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
