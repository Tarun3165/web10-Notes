 
function  permutate(arr, l, r,newArr)
{ 
    if (l == r)
    {  
      newArr.push(arr.join(" "))
      // console.log(arr.join(" "));
      
    }
    else
    { 
        for (let i = l; i <=r; i++)
        {   
          swap(arr, l, i);
          permutate(arr, l + 1, r, newArr);
          swap(arr, l, i);   // backtracking
        } 
        
    }
}
 function swap(arr,l,m)
{
    var temp = arr[l];
    arr[l] = arr[m];
    arr[m] = temp;
     return arr;
}
 
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr = newInput[1].trim().split(" ").map(Number);
    
  var newArr = [];
  permutate(arr, 0, arr.length - 1, newArr);
  
  newArr = newArr.sort();
   
  for (let i = 0; i < newArr.length;i++)
  {
    console.log(newArr[i]);
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
  
 