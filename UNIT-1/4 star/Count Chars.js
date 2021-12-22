//  4 star question ( tough and challenging)

function runProgram(input) {
    var data = input; 
    var temp = data[0];
    var result = "";
    var count = 1;
    for (let  i = 1; i <data.length;i++)
    {
        if (data[i] == temp)
            count++;
        else
        {
            result += temp + count;
            temp = data[i];
            count = 1;
        }
    }
    result += temp + count;
     console.log(result);
  
}


  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`aaabbccddd`);
     
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
  