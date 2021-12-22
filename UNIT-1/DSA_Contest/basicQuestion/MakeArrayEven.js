function checkArr1(arr)
{ 
    var flag = 0;
    
    for (let i = 0; i < arr.length;i++)
    { 
        for (j = 0; j < arr.length;j++)
        {
            var sum = 0;
            for (let k = 0; k < arr.length;k++)
            {
                sum += arr[k];
            }
            

            if(sum%2==0)
            { 
                flag = 1;
                break;
            }

            arr[i] = arr[j];
           
        }
        if (flag == 1)
            break;
    }

    if(flag==1)
    console.log("YES");
        
    else
    console.log("NO");
}

function checkArr2(arr)
{
    var countOdd = 0;
    var countEven = 0;
    for (let i = 0; i < arr.length;i++)
    {
        if (arr[i] % 2 == 1)
            countOdd++;
        else
            countEven++;

    }
    if (countEven > 0)
    console.log("YES");
    else if(countOdd % 2==0)
    console.log("YES");
    else
        console.log("NO");
   
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var T = Number(newInput[0]);   // test cases
    for (let i = 1; i <= T;i++)
    {
        var arr = newInput[i * 2].trim().split(" ").map(Number);

        // checkArr1(arr); 
        checkArr2(arr);    // checks sum of arr can be made even or not
    }
    
}
  
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    1
    3 2
    3
   1`);
     
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
  