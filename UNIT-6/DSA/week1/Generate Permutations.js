let newArr = [];

function swap(arr, low, i)
{
    let temp1 = arr[low];
    arr[low] = arr[i];
    arr[i] = temp1;
}

function permutate( arr, low, high) {
    if (low == high)
    { 
        newArr.push(arr.join(""))
    }
    else {
        for (let i = low; i <= high;i++)
        {
            swap(arr, low, i);
            permutate( arr, low + 1, high);
            swap(arr, i, low);

        }
    }

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var arr = newInput[1].trim().split(" ").map(Number);
    permutate(arr, 0, N - 1);
    
    newArr.sort((a, b) => {
        return a - b;
    })

    for (let i = 0; i < newArr.length;i++)
    {
        console.log(newArr[i].split("").join(" "));
    }
   
  
      
}
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`3
      1 2 3
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