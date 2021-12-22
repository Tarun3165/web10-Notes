 
 
 var arr1 = [];
 var  top = -1;
  
 function push(data)
 {
     arr1[++top] = data;
     
 }
  
   
 function pop()
 {  if(top==-1)
    console.log("No Food");
 else
 {
    console.log(arr1[top]);
     top--;   
 }
     
  }

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        if(arr[0]==2)
        {
            push(arr[1])
         }
        
        else if(arr[0]==1)
        {
            pop()
        }
         
    }
    
}
 
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`6
    1
    2 5
    2 7
    2 9
    1
    1 
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
  