function maximum(arr)
{
    var max = arr[0];
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] > max)
            max = arr[i]; 
    }
    var temp = "";
 
    for (let i = 0; i < arr.length;i++)
    {  
        if (arr[i] == max)
            arr[i] = -1;
        
        if (i == 0)
            temp += arr[0];
        else
            temp += " " + arr[i];
          
    }
    console.log(temp);
    
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);
         
        maximum(arr);
    }
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3
    1 3 2
    5
    3 3 2 6 7`);
     
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
  