function quickSort(arr,start,end) {
    if (start >= end)
        return;
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr,  index + 1,end);
     
}

function partition(arr,start,end)
{
    let pivotIndex = start;
    let pivotValue=arr[end];
    for (let i = start; i < end;i++)
    {
        if(arr[i]>pivotValue)
        {
            swap(arr, i, pivotIndex)
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end)
    return pivotIndex;

}

function swap(arr,i,j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    quickSort(arr,0,arr.length-1)
    console.log(arr.join(" "));

    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`5
      2 3 1 4 5
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