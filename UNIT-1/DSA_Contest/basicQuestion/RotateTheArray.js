function rotateArr1(arr,K)   // rotate in right direction
{
    var temp = arr;
    for (let i = 1; i <=K;i++ )
    {
        arr.unshift(arr[arr.length-1]);
        arr.pop();
        

    }
    console.log(arr.join(" "));
}


rotateArr2 = function (arr, k) {
  var n = arr.length;
  var result = "";
  for (let i = 0; i < n;i++)
  {
    result += arr[(k+i) % n]+" ";

  }
  console.log(result);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[i * 2 - 1].trim().split(" ").map(Number);
        var k = arr1[1];
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        
        // rotateArr1(arr, k % arr.length);     // right shift by k
      rotateArr2(arr, k);                       // left shift by k
        
    }
  
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    2 1
    1 2
    2 2
    1 2
    3 1
    1 2 3`);
     
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
  