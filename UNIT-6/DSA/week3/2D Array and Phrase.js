function findSABA(matrix, N, M) {
   
    let count = 0;
    for (let i = 0; i < N;i++)
    {
        for (let j = 0; j < M;j++)
        {    //horizontal check
            if(j+3<M)
            {
                if (matrix[i][j] == "s" && matrix[i][j + 1] == "a" && matrix[i][j + 2] == "b" && matrix[i][j + 3] == "a")
                count++;
            }
            //vertical check
            if(i+3<N)
            {
                if (matrix[i][j] == "s" && matrix[i+1][j] == "a" && matrix[i+2][j] == "b" && matrix[i+3][j] == "a")
                count++;
            } 
            //left diagonal check
            if(i+3<N && j+3<M)
            {
                if (matrix[i][j] == "s" && matrix[i+1][j+1] == "a" && matrix[i+2][j+2] == "b" && matrix[i+3][j+3] == "a")
                count++;
            } 
            //right diagonal check
            if(i-3>=0 && j+3<M)
            {
                if (matrix[i][j] == "s" && matrix[i-1][j+1] == "a" && matrix[i-2][j+2] == "b" && matrix[i-3][j+3] == "a")
                count++;
            } 
        }
    }
    console.log(count);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    let arr1 = newInput[0].trim().split(" ").map(Number);
    var N = arr1[0];
    var M = arr1[1];
    let matrix = [];
    for (let i = 1; i <= N;i++)
    {
        let arr = newInput[i].trim().split("");
        matrix.push(arr);

    }
    findSABA(matrix,N,M)
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5 5
      safer
      amjad
      babol
      aaron
      songs
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