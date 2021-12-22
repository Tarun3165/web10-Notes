function SwapSort(arr, K){
    let min;
    for (let  i = 0; i < arr.length - 1;i++)
    {
        min = i;
        for (let j = i + 1; j < arr.length;j++)
        {
            if (j - i > K)
                break;
            if (arr[j] < arr[min])
                min = j;
        }
        for (let k = min; k > i;k--)
        {
            let temp = arr[k];
            arr[k] = arr[k - 1];
            arr[k - 1] = temp;
        }
        K=K-(min-i)
    }
  console.log(arr.join(" "));
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim()
    for(let i = 1; i <= T;i++)
    {
        
        var arr1 = newInput[2 * i - 1].trim().split(" ").map(Number);
        let K = arr1[1];
        var arr = newInput[2 * i].trim().split(" ").map(Number);
        SwapSort(arr,K)
  }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3 2
    5 3 1
    5 3
    8 9 11 2 1
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