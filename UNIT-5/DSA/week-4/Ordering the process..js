function orderProcess(arr1, arr2) {
    let count = 0;
    for (let i = 0; i < arr1.length;i++)
    {
        let index = i;
        if (arr1[i] != arr2[i]) {
            
            for (let j = 0; j < arr1.length; j++) {
                if (arr1[j] == arr2[i])
                    index = j;
            }

           
            let temp = arr1[i];
            arr1[i] = arr1[index];
            arr1[index] = temp;
            
            count++;

        }
       
    }
    console.log(count+arr1.length);
}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var arr1 = newInput[1].trim().split(" ").map(Number);
    var arr2 = newInput[2].trim().split(" ").map(Number);
    orderProcess(arr1,arr2)

  
      
    }
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`3
      3 2 1
      1 3 2
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