function closestSum(N, K, arr) {
  
  arr = arr.sort((a, b) => {
    return a - b;
  })
  let l = 0;
  let r = N - 1;
  let closest = 999999;
  let ans = 0
  let sum = 0;
  for (let i = 0; i < N-2; i++) {
        sum = 0;
       while(l<r)
       {
         sum = arr[i] + arr[l] + arr[r];
         if (Math.abs(sum - K) < closest) {
          closest = Math.abs(sum - K)
          ans=sum
           l++
         }
         else if (sum > K)
           r--
         else {
           console.log(sum);
           return;
         }
           
       }
   
  }
  console.log(-1);

 
  
}

function runProgram(input) {
        

        
    var newInput = input.split("\n");
    var T = newInput[0].trim()
    for (let i = 1; i <= T; i++) {

        var arr1 = newInput[2 * i - 1].trim().split(" ").map(Number);
        let N = arr1[0];
        let K = arr1[1];
        var arr = newInput[2 * i].trim().split(" ").map(Number);
       closestSum(N,K,arr)

    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    4 1
    -1 2 1 -4
    3 1
    0 0 0
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