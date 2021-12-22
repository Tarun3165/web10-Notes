function nextGreaterEl(arr,index) {
   

      for (let j = index+1; j < arr.length; j++) {
          if (arr[j] > arr[index])
              return j;
    }
    return -1;
   
    
}

function nextSmallerEl(arr, index) {
   
    for (let j = index+1; j < arr.length; j++) {
        if (arr[j] < arr[index])
            return arr[j];
    }
    return -1;
  
}

function product(arr) {
    let prod = 1;
    for (let i = 0; i < arr.length; i++) {

        let smaller = nextGreaterEl(arr, i)
        // console.log('smaller:', smaller)
       
        prod = prod * nextSmallerEl(arr, smaller)
        // console.log('prod:', prod)
      
    }
   console.log(prod);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        let arr = newInput[i * 2].trim().split(" ").map(Number);
        product(arr)
       
       
    }
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      6
      5 1 6 2 5 1
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