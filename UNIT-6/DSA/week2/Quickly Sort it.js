function quickSort(arr, start, end) {

    if (start >= end)
        return;
    let index = partition(arr, start, end);
    quickSort(arr,start, index - 1);
    quickSort(arr, index + 1,end);
}

function partition(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = arr[end];
    for (let i = start; i < end;i++)
    {
        if(arr[i]<pivotValue)
        {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}

function swap(arr,a,b)
{
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] =temp;
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var arr = newInput[1].trim().split(" ").map(Number);
    quickSort(arr,0,N-1)
    console.log( arr.join(" "));

  
}
if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`5
  3 5 0 9 8
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