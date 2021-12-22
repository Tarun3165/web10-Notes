

function subsequence( temp,S, low, high) {
    if (low<= high+1&& temp.length>0)
    { 
        console.log(temp);
    }
   
    for (let i = low; i <= high;i++)
    {
        subsequence(temp+S[i], S, i+1, high);
    }
    

}

function runProgram(input) {
  
    var newInput = input.split("\n");
    var N = +newInput[0].trim();
    var S = newInput[1].trim();
    subsequence("",S, 0, N - 1);
      
}
    if (process.env.USERNAME === "TARUN RAWAT") {
      runProgram(`4
      abcd
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