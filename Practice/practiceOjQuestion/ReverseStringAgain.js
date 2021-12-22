// 3 star question

function reverseString(arr)
{
    var temp = "";
    for (let i = 0; i < arr.length;i++)
    {
        var str = arr[i];
        for (let j = str.length - 1; j >= 0;j--)
        {
            temp += str[j];
        }
        temp+=" "

    }
    console.log(temp);
}

 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
 
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i].trim().split(" ");
        reverseString(arr);
       
    }
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    hi there
    hello  world
    a  b`);
     
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
  