function arrangeLine(N, arr, Sweets) {
    let tempE = [];
    let tempO = [];
    if(Sweets==1)
    {  
        for (let i = 0; i < N; i++) {
            if (arr[i] % 2 == 0)
                tempE.push(arr[i])
            else
              tempO.push(arr[i])
      }
      tempE = tempE.sort((a, b) => {
        return a - b;
      })
      tempO = tempO.sort((a, b) => {
        return a - b;
      })
      tempE = tempE.join(" ");
      tempO = tempO.join(" ");
      console.log(tempE+" "+tempO);

    }
    else
    {
        
        for (let i = 0; i < N; i++) {
            if (arr[i] % 2 == 1)
            tempO.push(arr[i])
            else
            tempE.push(arr[i])
      }
      tempE = tempE.sort((a, b) => {
        return a - b;
      })
      tempO = tempO.sort((a, b) => {
        return a - b;
      })
      tempE = tempE.join(" ");
      tempO = tempO.join(" ");
      console.log(tempO+" "+tempE);
    }

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim()
    let count = 1;
    for (let i = 1; i <= T; i++) {

        var N = newInput[count].trim();
        count++;
        var arr = newInput[count].trim().split(" ").map(Number);
        count++;
        var Sweets = newInput[count].trim();
        count++;
       arrangeLine(N,arr,Sweets)
    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    6
    1 3 5 2 7 4
    1
    6 
    1 3 5 2 7 4
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