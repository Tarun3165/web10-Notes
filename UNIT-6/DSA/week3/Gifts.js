

function uniqueSubarrLongest(arr) {
    
    for (let i = arr.length-1; i >= 0;i--)
    {
        let p1 = 0
        let p2 = i;
        let len = 0
        let maxLen = p2-p1+1;
        while (p2<arr.length)
        {
            let set = new Set;
            for (let j = p1; j <= p2;j++)
            {
                if (!set.has(arr[j]))
                set.add(arr[j]);
                else
                break;
            }
            len = set.size;
            if(len==maxLen)
            {
                console.log(maxLen);
                return;
            }

            p1++;
            p2++;
        }

    }
    
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[2*i].trim().split(" ").map(Number);
        uniqueSubarrLongest(arr)

    }
  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`3
      8
      1 2 1 3 2 7 4 2
      5
      1 2 1 3 4
      4
      1 2 2 1
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