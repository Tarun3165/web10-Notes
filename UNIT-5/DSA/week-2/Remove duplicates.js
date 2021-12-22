

function removeDuplicate(arr) {    //brute force
    let obj = {};
  for(let i = 0; i < arr.length;i++)
  {
      if (obj[arr[i]] === undefined)
          obj[arr[i]] = 1;
      else
      obj[arr[i]] += 1;
  }
      let temp = "";
      let count = 0;
      for(k in obj)
      {
          count++;
          temp+=k+" "
      }
      console.log(count);
      console.log(temp);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[2*i].trim().split(" ").map(Number); 
        removeDuplicate(arr);
    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3
    1 1 2
    4
    1 1 3 3
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