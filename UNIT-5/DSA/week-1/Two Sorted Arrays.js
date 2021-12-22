function solve(arr1,arr2,N)
{
    let l = 0;
   
    let r = N - 1;
    let count = 0;
    while(l<=N-1 && r>=0)
    {
        if (arr1[l] == arr2[r]) {
            l++;
            r--;
            count++
        }
        else if (arr1[l] < arr2[r]) {
            l++
        }
        else
            r--;
    }
    console.log(count);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    let count = 1;
    for (let i = 1; i <= T;i++)
    {
        var N = newInput[count].trim();
        count++;
        var arr1 = newInput[count].trim().split(" ").map(Number);
        count++
        var arr2 = newInput[count].trim().split(" ").map(Number);
        count++;
       solve(arr1,arr2,N)
        

    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`5
    8
    1 2 3 5 8 8 9 9
    8 8 6 5 3 2 1 1
    9
    2 3 3 3 7 7 9 9 9
    9 9 9 8 6 5 4 3 1
    2
    4 7
    4 2
    3
    3 7 7
    8 5 1
    4
    2 7 7 8
    9 7 6 3
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