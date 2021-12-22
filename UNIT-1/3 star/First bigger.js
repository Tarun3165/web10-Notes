 

function firstbigger(item, num)
{
    var temp = 0;
    for (let i = 0; i < item.length;i++)
    {
      if (item[i] > num) {
        temp = item[i];
        break;
            
      }
      else
        temp = -1;
    }
     console.log(temp);
}

function compareNumbers(a, b) {
  return a - b;
}

 
function runProgram(input) {
  
    var newInput = input.split("\n");
  
   
    var arr = newInput[1].trim().split(" ").map(Number);
    var n = Number(newInput[2]);
   
 
  arr.sort(compareNumbers);    // sort() sorts the array in ascending order, but just like it is in dictionary i.e 223<4
  // so to sort an array numerically compareNumbers used like sort(compareNumbers)
 
   
  
    for (let i = 3; i <= n + 2;i++)
    {
      var m = Number(newInput[i]);
         firstbigger(arr, m);
    }
  
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`7
   123 234 543 21 2334 12 5452
    2
    65
    15
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
  