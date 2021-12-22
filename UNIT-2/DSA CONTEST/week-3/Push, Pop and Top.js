// var arr1 = [];
// var  top = -1;
 
// function push(data)
// {
//     arr1[++top] = data;
    
// }

// function peek()
// {
//     if (top == -1)
//         console.log("Empty!");
//     else
//         console.log(arr1[top]);
    
// }
  
// function pop()
// {  if(top==-1)
//     return;
//     else
//    top--;  
    
//  }
 

// function runProgram(input) {
  
//     var newInput = input.split("\n");
//     var T = +newInput[0].trim();
//     for (let i = 1; i <= T;i++)
//     {
//         var arr = newInput[i].trim().split(" ").map(Number);
//         if(arr[0]==1)
//         {
//             push(arr[1])
//          }
//         else if(arr[0]==2)
//         {
//             pop()
//         }
//         else if(arr[0]==3)
//         {
//             peek()
//        }
         
//     }
    
// }


 
function runProgram(input) {
  
  var newInput = input.split("\n");
var testcases = +newInput[0].trim();
var stack = [];    // stack created
  for (let i = 1; i <= testcases;i++)
  {
      var line = newInput[i].trim().split(" ").map(Number);
      if(line[0]==1)
      {
          stack.push(line[1])
       }
      else if(line[0]==2)
      {
        if (stack.length != 0)
          stack.pop(); 
      }
        
      else if(line[0]==3)      // peek
      {
        if (stack.length == 0)
          console.log("Empty!");
          else
         console.log(stack[stack.length-1]);    // element at the top the stack
     }
       
  }
  
}


if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`3
  2
  3
  1 3
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


  
 