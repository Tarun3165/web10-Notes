 
 
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N=+newInput[0].trim();
    var arr=newInput[1].trim().split(" ").map(Number);
    
    for(let i=0;i<N-1;i++)
    { for(let j=0;j<N-i-1;j++)
       { if(arr[j]>arr[j+1])
           {  var temp=0;
              temp=arr[j+1];
               arr[j+1]=arr[j];
              arr[j]=temp;
            }
       }
    }
           
     
     console.log(arr.join(" "))
     
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    3 5 0 9 8 
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
  