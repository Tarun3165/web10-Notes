function commonElementsArr(arr1, arr2, N) {
    let p1 = 0;
    let p2 = N - 1;
    let count = 0;
    while(p1<N && p2>=0)
    {
        if(arr1[p1]==arr2[p2])
        {
            count++;
            p1++;
            p2--;
        }
        else if(arr1[p1]<arr2[p2])
        {
            p1++;
        }
        else
            p2--;
    }
    console.log(count);

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    let count = 1;
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[count].trim();
        count++;
        var arr1 = newInput[count].trim().split(" ").map(Number);
        count++;
        var arr2 = newInput[count].trim().split(" ").map(Number);
        count++;
        commonElementsArr(arr1,arr2,N)


    }

    
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      6
      1 2 2 3 4 5
      4 4 3 2 1 1
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