function search(matrix, N, M,K) {
  let i = N - 1;
  let j = 0;
  while(i>=0&&j<M)
  {
    if (matrix[i][j] == K) {
      console.log(true);
      return;
    }
    else if (matrix[i][j] > K)
      i--;
    else
      j++
    
  
  }
    console.log(false);
} 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    let count = 1;
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[count].trim().split(" ").map(Number);
        count++;
        let N = arr1[0];
        let M = arr1[1];
        let matrix=[]
        for (let j = 0; j < N;j++)
        {
            var arr = newInput[count+j].trim().split(" ").map(Number);
            matrix.push(arr);
        }
        count += N;
        var K = newInput[count].trim();
        count++;
         
        search(matrix,N,M,K)

        
    }
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    1 4
    194 195 195 197
    188
    4 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16 
    17
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