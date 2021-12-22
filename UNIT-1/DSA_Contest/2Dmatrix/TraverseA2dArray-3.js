function traverse(matrix,N,M)     //Traverse the 2D array from right to left, and from up to down
{
    var res = "";
     for(let j = M-1; j >=0; j--)
    {
          
        for(let i = 0; i <N;i++)
        {
            res += matrix[i][j]+" ";
                         
        }
    }
    console.log(res);  
}


function runProgram(input) {
  
  var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);    
    var N = arr1[0];   // no. of rows
    var M = arr1[1];   // no. of columns
   

    var matrix = [];     
    for (let i = 1; i <= N;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
       matrix.push(arr)

    }

    traverse(matrix,N,M);
}
if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`4 3
1 8 9
2 7 10
3 6 11
4 5 12`);
   
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
