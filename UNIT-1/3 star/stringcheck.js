// 3 star
function runProgram(input) {
  
    var newInput = input.split("\n");

    var arr = newInput[1].trim().split("").map(Number);  // we get NaN if we have strings in the input
    var countChar = 0;
    var countNum = 0;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
       
        if (isNaN(arr[i]))             // isNaN() checks for NaN
            countChar++;
        else if(typeof arr[i]=="number")
            countNum++;
             
             
        
    }
   
    if (countChar == arr.length)
        console.log("chars");
    else if (countNum == arr.length)
        console.log("numbers");
    else
        console.log("alphanumeric");
     
}
   
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`3
    19q`);
     
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