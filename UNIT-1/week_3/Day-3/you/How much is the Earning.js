function earning(buildings,R)
{
    var buildingseen = 1;
    var totalEarning = 0;
    var building1 = buildings[0];
    for (let i = 1; i < buildings.length;i++)
    {
        if (buildings[i] > building1) {
            buildingseen++;
            building1 = buildings[i];
        }
        
    }
    totalEarning = buildingseen * R;
    console.log(totalEarning);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var S = Number(newInput[0]);
    for (let i = 1; i <= S;i++)
    {
        var streetBuildings = newInput[i * 2].trim().split(" ").map(Number);
        var NR = newInput[i * 2-1].trim().split(" ").map(Number);
        earning(streetBuildings,NR[1]);

    }
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    6 3
    8 2 3 11 11 10
    5 12
    12 20 39 45 89`);
     
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
  