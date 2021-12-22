   
function arrProblem1(arr) {    //using stack
  var stack = [];
  var temp = "";
  
  stack.push(arr[0]);
  for (let i = 0; i < arr.length;i++)
  {
    while(stack[ stack.length-1]>=arr[i])
    {
      stack.pop();
    }
    
    if (stack.length == 0)
    {
      temp += -1 + " ";  
    }
    else
    {
      temp += stack[stack.length - 1] + " "; 
    }
    stack.push(arr[i]);
  }
  console.log(temp);
 
}
 
function arrProblem2(arr) {    // brute force
  var stack = [];
  var smallest = 9999999;
  for (let i = 0; i < arr.length; i++) {
      
    var flag = 0;
    if (arr[i] <= smallest) {
      smallest = arr[i];
      stack.push(-1);
      continue;
    }
       
    for (let j = i - 1; j >= 0; j--) {
           
      if (arr[j] < arr[i]) {
        stack.push(arr[j])
        flag = 1;
        break;
        
      }
       
    }
    if (flag == 0)
      stack.push(-1);
    
     
    
  }
  console.log(stack.join(" "));
}
 

function runProgram(input) {
  
    var newInput = input.split("\n"); 
   var arr = newInput[1].trim().split(' ').map(Number)
        
    arrProblem1(arr);
        
 
     


  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`8
      39 27 11 4 24 32 32 1
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
  