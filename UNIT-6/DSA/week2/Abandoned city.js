function sumSubarr(arr, K) {
    let minlen = 999999;
    let minSum =9999899;
    let flag = 0;
    for (let i = 0; i < arr.length;i++)
    {    
        let p1 = 0;
        let p2 = i;
        let sum = 0;
        let len = 0;
        for (let j = p1; j <= p2;j++)
        {
            sum += arr[j];
        }
        while(p2<arr.length )
        {
            if(sum>=K)
            {
                if (sum < minSum)
                {
                    minSum = sum;
                    
                    len = p2 - p1+1;
                    if (len < minlen)
                    minlen = len;
                    flag = 1;
                }
            }
            p2++;
            p1++;
            sum = sum - arr[p1 - 1] + arr[p2];
        }
    }  
    if(flag==1)
    console.log(minlen);
    else
    console.log(-1);
    
}



function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[2*i-1].trim().split(" ").map(Number);
        let N = arr1[0];
        let K = arr1[1];
        var arr = newInput[2*i].trim().split(" ").map(Number);
        sumSubarr(arr,K)
      
    }
    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      5 7
      1 2 3 4 5
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