 // nice question
bubblesort = function (arr)
{
    for (let i = 0; i < arr.length;i++)
    {
        for (let j = i+1; j < arr.length;j++)
        {
            if (arr[i] > arr[j])
            {
                var temp = 0;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                }
        }
    }
    return arr;

}

function runProgram(input) {
  
  
    var newInput = input.split("\n");
   
    var arr = newInput[1].trim().split(" ").map(Number);
    
    var newarr = bubblesort(arr);
    var output = "";
    for (let i = 0; i < newarr.length;i++)
    {
        output += newarr[i] + " ";

    }
    console.log(output);
   
    
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    3 5 0 9 8`);
     
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
  