

function goodSum(arr,S) {
    let count = 0;
    for (let i = 0; i < arr.length;i++)
    {
      let sum = arr[i];
      if (sum <= S)
        count++;
      for (let j = i+1; j < arr.length;j++)
      { 
        sum += arr[j];
        if(sum<=S)
        count++;
      }
    }  
    console.log(count);
}


// function goodSum(arr,S) {
//     let count = 0;
//     for (let i = 0; i < arr.length;i++)
//     {    
//         let p1 = 0;
//         let p2 = i;
//         let sum = 0;
//         for (let j = p1; j <= p2;j++)
//         {
//             sum += arr[j];
            
//         }
//         while(p2<arr.length )
//         {
//             // console.log(sum);
          
//             if(sum<=S)
//             {
//                 count++;
                
//             }
//             p2++;
//             p1++;
//             sum = sum - arr[p1 - 1] + arr[p2];
//         }
//     }  
//     console.log(count);
// }


function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr1 = newInput[2*i-1].trim().split(" ").map(Number);
        let S = arr1[1];
        var arr = newInput[2*i].trim().split(" ").map(Number);
        goodSum(arr,S)
      
    }
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`4
      7 25
      4 3 1 10 5 5 1
      8 19
      7 9 8 7 2 6 7 4
      8 43
      1 9 6 3 5 8 2 10
      5 13
      10 1 9 3 1
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