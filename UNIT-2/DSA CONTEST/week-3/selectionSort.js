 
 
 

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N=+newInput[0].trim();
    var arr=newInput[1].trim().split(" ").map(Number);
    var temp ;
    for (let i = 0; i < N - 1; i++) {
        var min = i;
        for (let j = i + 1; j < N; j++) {
            if (arr[j] < arr[min])
                min = j;
        }
      
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
     
     console.log(arr.join(" "))
     
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    3 5 0 9 8`);
     
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
  