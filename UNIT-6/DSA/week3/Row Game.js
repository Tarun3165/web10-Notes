function distinctElement(matrix, N, M) {
    let p1 = 0;
    let p2 = 0;
    let set = new Set;
    while(p2<M)
    {
        let count = 0;
       let S = matrix[p1][p2];
       while(p1<N)
       {
         for (let i = 0; i < M;i++)
         {
           if (matrix[p1][i] == S)
           {
               count++;
               break;
           }
         }
         p1++;
        }
        p2++;
        p1 = 0;
        if (count == 3)
            set.add(S);
    }
    console.log(set.size);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    let count =1;
    for (let i = 1; i <= T;i++)
    {
        let matrix = [];
        var arr1 = newInput[count].trim().split(" ").map(Number);
        count++;
        let N = arr1[0];
        let M = arr1[1];
        for (let j = count; j < count + N;j++)
        {
            var arr = newInput[j].trim().split(" ").map(Number);
            matrix.push(arr);
        }
        distinctElement(matrix,N,M)
        count += N;

    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`2
      3 3
      1 2 1 
      2 3 2
      1 2 1
      3 3
      1 2 3
      1 1 3
      1 2 3
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