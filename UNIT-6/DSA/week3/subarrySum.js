
function subarraySum(arr, l, r,prefixSum) {
   
        if(l-1==0)
        console.log(prefixSum[r - 1]);
      else
      console.log(prefixSum[r-1]-prefixSum[l-2]);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var arr = newInput[1].trim().split(" ").map(Number);
    let prefixSum = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        prefixSum[i] = sum;
    }
    var T = +newInput[2].trim();
    for (let i = 3; i < 3+T;i++)
    {
        var arr1 = newInput[i].trim().split(" ").map(Number);
        let l = arr1[0];
        let r = arr1[1];
        subarraySum(arr,l,r,prefixSum)
    }
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`4
      3 2 1 5
      4
      1 3
      2 4
      1 4
      3 3 `);
       
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