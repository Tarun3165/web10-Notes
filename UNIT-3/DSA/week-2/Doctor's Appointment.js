function addArrElement(n, index, arr)
{
  if (index == arr.length) 
  {
    arr.push(n);
    console.log(arr);
    return arr;
  }
  else
    arr.push(arr[arr.length - 1])
  
  for (let i = arr.length - 2; i >= 0;i--)
  {
    if(i!=index)
    {
      arr[i] = arr[i - 1]; 
    }

     else
    {
      arr[i] = n;
     console.log(arr);

      return arr;
    }

  }
  console.log(arr);

 }
 
function removeArrElement(n, arr) {
  var flag = 0;
  for (let i = 0; i < arr.length;i++)
  {
    if(flag==1)
    {
      arr[i-1] = arr[i];
    }
    if (arr[i] == n)
      flag = 1;
  }
  arr.pop();
  // console.log(arr);
  return arr;
 }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = newInput[0].trim();
    var arr1=newInput[1].trim().split(" ").map(Number);
    var arr2 = newInput[2].trim().split(" ").map(Number);
    var count = 0;
    
    while(arr1.length>0)
    {
      var x = arr1.shift();
      for (let i = 0; i < arr2.length;i++)
      {
        count++;
        if (arr2[i] == x) {
          removeArrElement(x, arr2);
          break;
        }
        
      }
    }
    console.log(count-1);
    
}


// function runProgram(input) {
  
//     var newInput = input.split("\n");
//     var N = newInput[0].trim();
//     var arr1=newInput[1].trim().split(" ");
//     var arr2 = newInput[2].trim().split(" ");
//     var count = 0;
    
   
//     for (let i = 0; i < arr1.length;i++)
//     {
//         for (let j = 0; j < arr2.length;j++)
//         {
//             count++;
//             if (arr1[i] == arr2[j])
//             {
//                 arr2[j] = "X";
//                 break;
//             }
//             if (arr2[j] == "X")
//                 count--;
//         }
        
//     }
//     console.log(count-1);
   
// }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`4
    1 2 3 4
    4 2 3 1 
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
  