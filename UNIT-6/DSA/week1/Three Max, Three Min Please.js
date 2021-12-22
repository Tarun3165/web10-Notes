function maxMin(arr, N) {
    arr = arr.sort((a, b) => {
        return a - b;
    })
    if(arr.length<3)
    {
        console.log("Not Possible") 
        console.log("Not Possible") 
        return;
    }
    let min = [arr[0]];
    let max = [arr[N-1]];
    for (let i = 1; i < N;i++)
    {
        if (arr[i] != arr[i - 1])
            min.push(arr[i]);
        if (min.length == 3)
        {
             console.log(min.join(" "));
            break;
        }
    }

    for (let i = N-2; i >=0;i--)
    {
        if (arr[i] != arr[i + 1])
            max.push(arr[i]);
        if (max.length == 3)
        {
             console.log(max.reverse().join(" "));
            break;
        }
    }
    if(min.length!=3)
        console.log("Not Possible");
        if(max.length!=3)
        console.log("Not Possible");


}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var arr = newInput[1].trim().split(" ").map(Number);
    maxMin(arr,N)
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`6
      51 0 0 11 -11 23
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