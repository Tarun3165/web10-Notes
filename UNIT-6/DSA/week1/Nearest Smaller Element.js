function NearestSmallerEle(arr) {
    let temp = "";
    let p1 = 0;
    let p2 = arr.length - 1;
    let smallest = 999999999;
    for (let i = 0; i < arr.length;i++)
    {
        let flag = 0;
        if (arr[i] < smallest)
            smallest = arr[i];
        p1 = i - 1;
        p2 = i + 1;
        
      

        while (p1 >= 0 || p2 < arr.length)
        {
            if (arr[p1] < arr[i] )
            {
                temp += arr[p1]+" ";
                flag=1;
                break;
            }
            else if (arr[p2] < arr[i])
            {
                temp += arr[p2]+" ";
                flag=1;
                break;
            }
            p1--;
            p2++;
                
        }

        if(flag==0 )
        temp += -1 + " ";
    }
    console.log(temp);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = +newInput[0].trim();
    for (let i = 1; i <= T;i++)
    {
       
        var arr = newInput[2*i].trim().split(" ").map(Number);
        NearestSmallerEle(arr)
        

    }
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`1
      8
      39 27 11 4 24 32 32 1
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