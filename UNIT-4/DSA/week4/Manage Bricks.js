


function maxHeight( arr)
{
   arr = arr.sort((a,b) => {
    return a - b;
 })
  let prevLayer = arr[0];
  let prevBrickCount = 1;
  let currentLayer = 0;
  let currentBrickCount = 0;
  let height = 1;

  for (let i = 1; i < arr.length;i++)
  {
    currentBrickCount += 1;
    currentLayer += arr[i];
    if(prevBrickCount<currentBrickCount&& prevLayer<currentLayer)
    {
      height += 1;
      prevBrickCount = currentBrickCount;
      prevLayer = currentLayer;
      currentBrickCount = 0;
      currentLayer = 0;
    }
    
    
  }
  console.log(height);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim()
 var arr = newInput[1].trim().split(" ").map(Number);
    arr = arr.sort((a, b) => {
       return b - a;
    })
  maxHeight( arr)

   

    
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    40 100 20 30
    
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