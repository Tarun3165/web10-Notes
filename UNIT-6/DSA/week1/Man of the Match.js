function  manOfMatch(arr){
    let ABD = 0;
    let virat = 0;
    let flag = 1;
    let count = 0;
    for (let i = 0; i < arr.length;i++)
    {
        count++;

        if(flag==1)
            ABD += arr[i];
            
        else
            virat += arr[i];

        if (count == 6 )
        {  
          if (flag == 1)
              flag = 0;
          else
              flag = 1;
             
          count = 0;
        }

        if ( arr[i]==1 || arr[i]==3)
        {  
          if (flag == 1)
              flag = 0;
          else
              flag = 1;
        }
        
       
    }
    // console.log(virat,ABD);
    if(virat>ABD)
        console.log("Virat Kohli");
        else if(ABD>virat)
        console.log("AB de Villiers");
    else
        console.log("Tie");

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var N = +newInput[2*i-1].trim();
        var arr = newInput[2*i].trim().split(" ").map(Number);
        manOfMatch(arr)
     

    }
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`3
      2
      1 2 0 0 1 1 6 6 4 1 6 1
      3
      0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
      1
      0 1 0 1 0 0
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