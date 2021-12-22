function checkDisjoint(S, S1, S2) {
    let temp = "";
    for (let i = 0; i < S1.length;i++)
    { 
        temp += S1[i];
    }
    for (let i = 0; i < S2.length;i++)
    { 
        temp += S2[i];
    }
    if (S.split("").sort().join("") == temp.split("").sort().join(""))
       console.log(true);
    else
        console.log(false);
   
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim()
    let count = 1;
    for (let i = 1; i <= T;i++)
    {
        var N = newInput[count].trim()
        count++;
        var S = newInput[count].trim()
        count++;
        var N1 = newInput[count].trim()
        count++;
        var S1 = newInput[count].trim()
        count++;
        var N2 = newInput[count].trim()
        count++;
        var S2 = newInput[count].trim()
        count++;

        checkDisjoint(S,S1,S2)


    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    7 
    sunrise
    3 
    sun
    4
    sire
    7
    roseday
    3
    dat
    4
    sore
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