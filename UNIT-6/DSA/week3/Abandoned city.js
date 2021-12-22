function minpath(arr, N, K) {
    let minDis = N+1;
    for(let i = 0; i < N;i++)
    {
        let sum = arr[i];
        let dis = 1;
        if(sum>=K) 
        {   
            if (dis < minDis)
            minDis = dis;
        }
        for (let j = i + 1; j<N;j++)
        {
            
            sum += arr[j];
            dis++
            if(sum>=K) 
            {   
                if (dis < minDis)
                minDis = dis;
                break;
            }
        }
        
    }
    if(minDis==N+1)
    console.log(-1);
    else
    console.log(minDis);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[2 * i - 1].trim().split(" ").map(Number);
        let N = arr1[0];
        let K = arr1[1];
        var arr = newInput[2 * i ].trim().split(" ").map(Number);
       minpath(arr,N,K)

    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      19 588
      6 55 21 13 93 35 58 6 30 3 86 76 39 74 59 58 55 86 52
      
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