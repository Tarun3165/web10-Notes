// indexof2
//ifindex==arr.length-1   or is index not found  print -1

function index_of2(item)
{  console.log(item);
  var index = 0;
  for (let i = 0; i < item.length; i++)
  {
    if (item[i] == 2)
      index = i; 
  }
  if ((index == item.length - 1)||index==0)
    console.log(-1);
  else
    console.log(item[index+1]);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
   
  var arr = newInput[1].trim().split(" ").map(Number);
  
  index_of2(arr);
  // console.log(arr.indexOf(2));  // built in function
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    3 5 8 2 6`);
     
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
  