
function findFront(pN, arr) {
    let ans = -1;
    let low = 0;
    let high = arr.length - 1;
    while(low<=high)
    {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] > pN)
        { if(mid==0)
            return "Front"
            high = mid - 1;
        }
          
        else
        {
            ans = arr[mid];
            low = mid + 1;
        }

    }
    return ans
}

function findbehind(pN, arr) {
    let ans = -1;
    let low = 0;
    let high = arr.length - 1;
    while(low<=high)
    {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] > pN)
        {  high = mid - 1;
            ans = arr[mid];
        }
        
        else
        {   if(mid==arr.length-1)    
            return "Last"
            low = mid + 1;
        }

    }
    return ans
}

function findThePerson(pN,arr)
{
    let x=findFront(pN, arr);
    let y=findbehind(pN, arr);
   console.log(x,y);
    
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var pN = newInput[i*2-1].trim();
        var arr = newInput[i*2].trim().split(" ").map(Number);
       findThePerson(pN,arr)
   
    }
  
  
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`3
      3
      1 4 5 6 8 9
      5 
      1 2 6 7 8
      1
      2 3 4 5 6
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