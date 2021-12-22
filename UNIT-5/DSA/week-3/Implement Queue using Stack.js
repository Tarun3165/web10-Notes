let s1 = [];
let s2 = [];
function enqueue(x) {
  s1.push(x);
}
function dequeue() {
  if(s2.length==0)
       {
           if(s1.length==0)
           return -1; 
           else 
           {
               while(s1.length!=0)
               {
               let x=s1.pop();
               s2.push(x);
               }
                   return s2.pop();
               
           }
       }
}

function peek() {
  if(s2.length==0)
    return s1[0];
  else
 return s2[s2.length-1]
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        if (arr[0] == 0)
            enqueue(arr[1]);
        else if (arr[0] == 1)
         console.log(   peek());
        else
        dequeue()
           
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`6
      0 1
      0 2
      0 3
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