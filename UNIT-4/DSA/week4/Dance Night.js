function fun(M, N, arr1, arr2)
{
  arr1 = arr1.sort((a,b) => {
    return b - a;
  })
  arr2 = arr2.sort((a,b) => {
    return b - a;
  })
 
  let i = 0;
  let j = 0;
  let count = 0;
  while(i<M&& j<N)
  {
       if(arr1[i]>arr2[j])
       {
         count++;
         i++;
         j++;
    }
    else
       {
         j++
         }
  }
  if(count>=M)
  console.log("YES");
  else
    console.log("NO");

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim()
    let count = 1;
    for (let i = 1; i <=T;i++)
    {
        var arr = newInput[count].trim().split(" ").map(Number);
        count++;
        let M = arr[0];
        let N = arr[1];
        var arr1 = newInput[count].trim().split(" ").map(Number);
        count++;
        var arr2 = newInput[count].trim().split(" ").map(Number);
        count++;
       
       fun(M,N,arr1,arr2)

   
    }
    
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    4 5
    2 5 6 8
    3 8 5 1 7
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