  

function searchNum(x, y)
{    var countR = 0;
     var countC = 0;
     var  count = 0;
    //  var matrix = [];
    // for (let i = 0; i <= x;i++)
    // {
    //      var arr = [];
    //     for (let j = 0; j <= y;j++)
    //     {
    //         arr[j] = "";
            
    //     }
    //     matrix.push(arr);
    // }
     
    
    while(countC<=x-1 ||countR<=y-1 )
    {
        if (countR == countC)
        {
            equal();
            if (countR == x - 1 && countC == y - 1) { 
                break;
            }
            
           
        }

        else if (countC == 0 && countR != 0 || countR == 0 && countC != 0)
        {
            oneZero();
            if (countR == x - 1 && countC == y - 1) { 
                break;
            }
        } 
        
    }
    console.log(count)

    function equal()
   {
    if (countC == 0 && countR == 0) {
        count++;
        // matrix[countR][countC] = count;
        if (countR == x - 1 && countC == y - 1) { 
            return;
        } 
        countC++;
        count++;
            // matrix[countR][countC] = count;
        
         
    }

    else
    {
        if (countC % 2 == 1) {
            while (countC) {
                if (countR == x - 1 && countC == y - 1) { 
                    break;
                }
                countC--;
                count++;
                // matrix[countR][countC] = count;
            }
            
        }
        
        else if (countC % 2 == 0) {
            while (countR) {
                if (countR == x - 1 && countC == y - 1) { 
                    break;
                }
                countR--;
                count++;
                // matrix[countR][countC] = count;
            }

        }
    }
  }  

    function oneZero()
  {   
    if(countC==0)
    {
        countR++;
        count++;
        // matrix[countR][countC] = count;
        
        while(countC!=countR )
        { if (countR == x - 1 && countC == y - 1) { 
            break;
          }
            countC++;
            count++;
            // matrix[countR][countC] = count;
        }
    }
        
    else
    {
        if (countR == 0 && countC == 1) 
            countR++;
        
        else
            countC++;
        
        count++;
        // matrix[countR][countC] = count;
        
        
        while(countC!=countR )
        {     if (countR == x - 1 && countC == y - 1) { 
            break;
        }
            countR++;
            count++;
            // matrix[countR][countC] = count;
         
        }
    }
  } 
 
   
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var t = Number(newInput[0]);
    for (let i = 1; i <= t;i++)
    {
        var arr = newInput[i].trim().split(" ").map(Number);
        var x = arr[0];
        var y = arr[1];
        
        searchNum(x, y); 
    } 
    
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
2 3
1 1
4 2`);
     
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
  