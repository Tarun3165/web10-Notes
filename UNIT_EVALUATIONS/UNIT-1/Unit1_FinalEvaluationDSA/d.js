function Swap(matrix,N)
{
    var countSwap = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i < j) {
                if (matrix[i][j] == "*" && matrix[j][i]=="+") {
                    countSwap++;
                    var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
        }
    }
    }
    
    count1 = 0;
    count2 = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i <j) {
                if (matrix[i][j] == "+" ) {
                    count1++;
             
                }
                
            }
            
            if (i >j) {
                if (matrix[i][j] == "*" ) {
                    count2++;
             
                }
                
        }
      }
    }

    // console.log(count1,count2);

    if(count1==N&&count2==N&&countSwap!=0)
   console.log(countSwap);
   else  
   console.log(-1);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);
    
    var count = 1;
    for (let i = 1; i <= T;i++)
    {
        var N = Number(newInput[count]); 
        count++;
        var matrix = [];
        for (let j = count; j < count + N;j++)
        { 
            var arr = newInput[j].trim().split("");
            matrix.push(arr);
        }
        count += N;
        Swap(matrix,N);
    }
     
  }
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`1
    3
    x*+
    +x+
    +*x`);
     
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
  