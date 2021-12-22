let newArr = [];
function permuatation(arr, low, high) {
    if (low == high)
    {
         newArr.push(arr.join(""))
    }
        
    for (let i = low; i <= high;i++)
    {
        swap(arr, low, i);
        permuatation(arr,low+1, high);
        swap(arr, i,low);
    }
}
function swap(arr,a,b)
{
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var arr = newInput[1].trim().split(" ").map(Number);
    permuatation(arr, 0, N - 1)
    newArr = newArr.sort();
    for(let element of newArr)
    {
        console.log(element.split("").join(" "));
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