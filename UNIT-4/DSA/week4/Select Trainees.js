function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim()
    for (let i = 1; i <= T;i++)
    {
        let g1 = [];
        let g2 = [];
        var arr = newInput[2 * i].trim().split(" ").map(Number);
        arr = arr.sort((a, b) => {
            return a - b;
        })
        for (let j = 0; j < arr.length;j++)
        {
            if(j%2==0)
                g1.push(arr[j])
            else
                g2.push(arr[j])
        }

        let mid = Math.floor(g1.length / 2);
        console.log(Math.abs(g1[mid]-g2[mid]));
       
    
    }

    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    1
    1 1
    3
    6 5 4 1 2 3
    5
    13 4 20 13 2 5 8 3 17 16
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