// print -1 in new where arr element is divisible by the smallest element

function smallest(arr)
{
    var small = arr[0];
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] < small)
            small = arr[i];
        
    }
    return small;
}

function print_1(arr,small)
{
    var temp = "";
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] % small == 0)
            temp += -1+" ";
        else
            temp += arr[i]+" ";

    }
    console.log(temp);

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0];
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number); 
        var K = smallest(arr); 
        print_1(arr,K);
        
    } 
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3
    1 3 2
    5
    3 3 2 9 7`);
     
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
  