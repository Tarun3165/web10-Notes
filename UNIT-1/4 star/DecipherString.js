//4 star question

decipher=function(arr)
{
    var temp = "";
    for (let i = 1; i < arr.length;i=i+2)
    {
        var count = 0;
        count = arr[i];
        for (let j = 1; j <= count;j++)
        {
            temp += arr[i - 1];
        }
 
    }
    console.log(temp);

}
function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    for (let i = 1; i <= T;i++)
    {
        var str = newInput[2 * i].trim();
        decipher(str);
         
    }
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    6
    a2b1c2
    6
    a2z1a2`);
     
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
  