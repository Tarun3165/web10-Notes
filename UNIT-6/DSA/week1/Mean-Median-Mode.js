function meanMedianMode(arr,N) {
    arr = arr.sort((a, b) => {
        return a - b;
    })
    let mean = 0;
    let sum = 0;
    let median = 0;
    let index1 = 0;
    let index2 = 0;

    if (N % 2 == 1)
    {
      index1 = (N - 1) / 2;
      median = Math.floor(arr[index1] );
    }
    else {
        index1=Math.floor((N - 1) / 2)
        index2=Math.ceil((N - 1) / 2)
       
       median=arr[index1]+arr[index2]
        median = Math.floor(median / 2);
     
       
    }
   

    let mode = 0;
    let obj = {};
    for (let i = 0; i < N;i++)
    {
        sum += arr[i];
        if (obj[arr[i]] == undefined)
            obj[arr[i]] = 1;
        else
        obj[arr[i]] += 1;
    }
    mean =Math.floor( sum / (N));

    let maxcount = 0;

    for(k in obj)
    {
        if(obj[k]>maxcount)
        {
            maxcount = obj[k];
            mode = k;
        }
    }
    console.log(mean,median,mode);

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[2*i].trim().split(" ").map(Number);
    meanMedianMode(arr,arr.length)

    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`2
      5
      4 8 7 6 4
      6
      4 4 4 2 2 2
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