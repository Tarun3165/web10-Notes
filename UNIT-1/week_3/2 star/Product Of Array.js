function product(item)
{
    var prod = 1;
    for (let i = 0; i < item.length;i++)
    {
        prod *= item[i];
    }
  return prod;
}

function proddivide(item,prod)
{
    var newarr = [];
    for (let i = 0; i < item.length; i++)
    {
        newarr.push(prod/ item[i]);
        
    }
  return newarr;
}


function printarray(item)
{
  var result = "";
  for (let i = 0; i < item.length; i++)
  {
    if (i == 0)
      result = item[i];
    
    else 
    result += " "+item[i] ;
        
  }
   
 console.log(result ); 
}

function runProgram(input) {
   
    var newInput = input.split("\n")  ; 
    var time = Number(newInput[0]);
   
    for (let i = 1; i <= time;i++)
    {
      var arr = newInput[i * 2].trim().split(" ").map(Number);  
      var p = product(arr);
      var new_arr= proddivide(arr, p);
      printarray(new_arr);
       
    }
 
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
     
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
  