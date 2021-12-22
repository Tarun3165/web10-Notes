console.time();

function runProgram(input) {
    var newInput = input.split("\n");
    
    for (let i = 1; i <= newInput.length-1;i++)
    {     var N =+newInput[i]; 
        
        var sum = 0;
        for (let i = 3; i < N;i++)
        {
            if (i % 15 == 0)
            sum += i;
            else if (i % 3 == 0 || i % 5 == 0)
            sum += i;
        }
        console.log(sum);   
    } 
 

    
}
if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`2
    10
    100`);
    
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
  
console.timeEnd();