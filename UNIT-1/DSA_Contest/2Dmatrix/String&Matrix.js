// 4 star question

function checkString(matrix, str, N, M)
{
    var index = [];
    for (let l = 0; l < N;l++)
    {
        index.push([]);
    }
    
    var count = 0;
    
    for (let i = 0; i < str.length;i++)
    {  var flag = 0; 
    
        for (let k = 0; k < M;k++)
           {
                count = count % N;
                if (str[i] == matrix[count][k]&&index[count][k]!=str[i]) {
                    index[count][k] = str[i];
                    count++;
                    flag = 1;
                    break;
                }
            }
                
          if(flag==0)
            return "No";
        
    }
    return "Yes";
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    var count = 1;
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[count].trim().split(" ").map(Number);
        var N = arr[0];
        var M = arr[1];
        count++;
        var matrix = [];
        for (let j = count; j < count + N;j++)
        {
            var arr1 = newInput[j].trim().split("");
            matrix.push(arr1);
        }
        count += N;
        var str = newInput[count].trim();
        count++;
       
        console.log( checkString(matrix, str, N, M));
    }

    
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    3 3
    aba
    xyz
    bdr
    axbydb
    3 3
    aba
    xyz
    bdr
    axbydb
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
  