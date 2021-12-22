function countSubArr(arr)
{
    var count = 0;
    for (let i = 0; i < arr.length;i++)
    {

        if (arr[i] % 2 == 0)    // checking starting element even
        {
            for (let j = i + 1; j < arr.length;j++)
            {
                var temp = "";
                for (let k = i; k <= j;k++)
                {   
                    temp += arr[k];

                }
                
                if (temp[temp.length - 1] % 2 == 1)   // checking  last element odd
                {
                    count++;
                  
                }
        
            }
        }
    }
    console.log(count);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);    // no. of test case
   
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
        
        countSubArr(arr);
    }
     
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    5
    1 2 3 4 5`);
     
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
  