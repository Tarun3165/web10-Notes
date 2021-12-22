let temp = "";

function searchNumber(N, arr, l, r) {
  let p1 = 0;
  let p2 = N - 1;
  
  while (p1 < N)
  {
    if (arr[p1] >= l) {
      break;
    }
    else
      p1++;
  }
  while (p2 >= 0)
  {
    if (arr[p2] <= r) {
      break;
    }
    else
      p2--;
  }
  
  let total = p2 - p1 + 1;
  temp+=total+" "
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
  var arr = newInput[1].trim().split(" ").map(Number);
  arr = arr.sort((a, b) => {
    return a - b;
  })
  
    var k = +newInput[2].trim();
    for (let i = 3; i < k + 3;i++)
    {
        var arr1 = newInput[i].trim().split(" ").map(Number);
        let l = arr1[0];
        let r = arr1[1];
        searchNumber(N, arr, l, r)
    }
    console.log(temp);

    
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5
      10 1 10 3 4
      4
      1 10
      2 9
      3 4
      2 2
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