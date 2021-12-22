
var ans = -1;

function sumOfPair(arr, T) {
    var p1 = 0;
    var p2 = arr.length - 1;
  

    while(p1<=p2)
    {
        if(arr[p1]+arr[p2]>T)
        {
            ans = arr[p1] + arr[p2];
            p2--;
        }
       else if (arr[p1] + arr[p2] <= T)
            p1++
        
    }
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var t = +newInput[0].trim()
    for (let i = 1; i <= t;i++)
    {   ans = -1
        var arr1 = newInput[2*i-1].trim().split(" ").map(Number); 
        var N = arr1[0];
        var T = arr1[1];
        var arr = newInput[2 * i].trim().split(" ").map(Number);
        arr = arr.sort((a, b) => {
            return a - b;
        })
        sumOfPair(arr, T);
        console.log(ans);

       

    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    5 8
    1 3 5 9 13
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