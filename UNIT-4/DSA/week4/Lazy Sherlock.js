function solve(arr) {
    
    let coins = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
    coins = coins.sort((a, b)=> {
        return b - a;
    })
    arr = arr.sort((a, b)=> {
        return a - b;
    })
    
    let minNotes = 100;
    let minAmount = 10000;

    for (let i = 0; i < arr.length;i++)
    {
      var  Amount = arr[i];
        let Notes = 0;

        for (let j = 0; j < coins.length; j++) {

            while(arr[i]>=coins[j])
            {
                Notes++;
                arr[i]=arr[i]-coins[j]
            }
        }

        if(Notes<minNotes)
        {
            minNotes = Notes;
            minAmount=Amount

        }

    }
    console.log(minAmount);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim()
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[2 * i].trim().split(" ").map(Number);
       solve(arr)

    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    5
    2 1 51 23 5
    3
    203 13 2
    
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