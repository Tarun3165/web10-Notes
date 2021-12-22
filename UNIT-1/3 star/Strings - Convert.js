// tough
function runProgram(input) {
  
    var newInput = input.split("\n");
   
    var data = newInput[1].trim() ;
     
    temp = "";
    for (let i=0; i < data.length;i++)
    {
      

        if (data[i].charCodeAt() > 96&&data[i].charCodeAt()<123)    //s.charCodeAt()  is used to find ascii value
            temp += String.fromCharCode(data[i].charCodeAt() - 32);    //  string.fromCharode(98) gives the charcter with that ascii value
            
        else
            temp += String.fromCharCode(data[i].charCodeAt() + 32);
             
    }
    console.log(temp);

   
    
     
  }
  if (process.env.USERNAME === "TARUN RAWAT") {
    runProgram(`6
    aBbcdZ`);
     
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
  