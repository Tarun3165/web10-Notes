function findSum(N, arr) {
  
  let temp = "";
  arr.unshift("x") 
 
    for (let i = 1; i <=N;i++)
    {     let x = -1;
          let y = -1;
        for (let j = i - 1; j >= 1;j--)
        {
            if(arr[j]>arr[i])
            {
              x = j;
              
                break;
            }
        }

        for (let j = i + 1; j<=N;j++)
        {
            if(arr[j]>arr[i])
            {
                y = j;
                break;
            }
        }
      temp += Number(x + y) + " ";
    }
    console.log(temp);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var arr = newInput[1].trim().split(" ").map(Number);
    findSum(N,arr)
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5
      5 4 1 3 2
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