function runProgram(input) {
  var newInput = input.split("\n");
  var arr1 = newInput[0].trim().split(" ").map(Number);
  var arr2 = newInput[1].trim().split(" ").map(Number);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      console.log("New Zealand");
      break;
    } else if (arr1[i] < arr2[i]) {
      console.log("England");
      break;
    } else {
      i++;
      if (arr1[i] > arr2[i]) {
        console.log("New Zealand");
        break;
      } else if (arr1[i] < arr2[i]) {
        console.log("England");
        break;
      } else {
        i++;
        if (arr1[i] > arr2[i]) {
          console.log("New Zealand");
          break;
        } else if (arr1[i] < arr2[i]) {
          console.log("England");
          break;
        } else {
          console.log("Draw");
          break;
        }
      }
    }
  }
}
if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`242 16 21
    242 15 21`);
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
