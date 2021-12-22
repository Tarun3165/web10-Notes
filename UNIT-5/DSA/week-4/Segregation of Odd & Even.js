function seperateOddEven(N, arr, q) {
    let Even = [];
    let Odd = [];
    for (let i = 0; i < N;i++)
    {
        if (arr[i] % 2 == 0)
        {
            Even.push(arr[i]);
        }
       else
        {
            Odd.push(arr[i]);
        }
  }
  Even = Even.join(" ");
  Odd = Odd.join(" ");
  
  if(Even.length==0)
  {
    console.log(Odd);
    return;
  }
  else if(Odd.length==0)
  {
    console.log(Even);
    return;
  }
  
  if (q == 1) {
    console.log(Even, Odd);
    return;
  }
  else  {
    
    console.log(Odd, Even);
    return;
  }
     
    
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    let count = 1;
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[count].trim();
        count++;
        var arr = newInput[count].trim().split(" ").map(Number);
        count++;
        var q = +newInput[count].trim();
        count++;
       seperateOddEven(N,arr,q)
        
    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`2
      5
      1 1 1 3 3 3
      1
      5
      1 2 3 4 5
      2
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