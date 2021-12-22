function checkTriangle(item)
{
    var a = item[0];
    var b = item[1];
    var c = item[2];
    sidesoftriangle(a, b, c);
}
function sidesoftriangle(a, b, c)
{
    if(a+b>c&&a+c>b&&b+c>a)
        console.log("Yes");
    else
        console.log("No");
}


function runProgram(input) {
  
    var newInput = input.split("\n");
   
    var T = Number(newInput[0]);
    for (let i = 1; i <= T; i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        checkTriangle(arr);
        
        }
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    4 5 13
    7 1 8
    2 5 4
    2 2 2
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
  