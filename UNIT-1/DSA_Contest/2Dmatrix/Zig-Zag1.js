function traverseZigZag(matrix,n,m)     //Traverse the 2D array from right to left, and from up to down
{
    var res = "";
     for(let i = 0; i <n; i++)
    {
        if (i % 2 == 0) 
        {   for(let j = m-1; j >=0;j--)
            {
                res += matrix[i][j]+" ";
                            
            }
        }
             
        else
        {   for(let j = 0; j <m;j++)
            {
                res += matrix[i][j]+" ";
                            
            }
        }
    }
    console.log(res);  
}


function runProgram(input) {
  
  var newInput = input.split("\n");
    var arr1 = newInput[0].trim().split(" ").map(Number);    
    var n = arr1[0];   // no. of rows
    var m = arr1[1];   // no. of columns
   

    var matrix = [];     
    for (let i = 1; i <= n;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
       matrix.push(arr)

    }

    traverseZigZag(matrix,n,m);
}
if (process.env.USERNAME === "TARUN RAWAT") {
  runProgram(`5 5
  4 7 1 1 7
  8 9 9 6 1
  6 4 9 5 1
  7 7 4 7 7
  8 6 2 5 5`);
   
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
