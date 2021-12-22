function checkCommonElemnet(arr1, arr2)
{   
    for (let i = 0; i < arr1.length; i++)
    {
        for (let j = 0; j < arr2.length;j++)
        {
            if (arr1[i] == arr2[j])
            
            {
                console.log(arr1[i]);
                break;     // break only comes out of the first loop(inner loop) while the outer loop continues
                 
            }
             
        }
        // console.log(arr1[i]);
    }
}

function runProgram(input) {
  var newInput = input.split("\n");
  var arr1 = newInput[1].trim().split(" ").map(Number);
  var arr2 = newInput[2].trim().split(" ").map(Number);
  checkCommonElemnet(arr1, arr2);
}
if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`3
    4 5 7
    9 2 5`);
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
